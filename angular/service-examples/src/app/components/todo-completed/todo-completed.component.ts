import { CommonModule } from '@angular/common'
import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

import { Todo } from '../../interfaces/todo.interface'
import { CounterService } from '../../services/counter.service'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-completed',
  imports: [CommonModule],
  providers: [CounterService],
  templateUrl: './todo-completed.component.html',
  styleUrl: './todo-completed.component.scss',
})
export class TodoCompletedComponent implements OnInit {
  private destroyRef = inject(DestroyRef)
  private todoService = inject(TodoService)
  counterService = inject(CounterService)

  todos: Todo[] = []

  ngOnInit(): void {
    this.todoService
      .getCompletedTodos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((todos) => (this.todos = todos))
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id)
  }

  incrementCounter() {
    this.counterService.increment()
  }
}
