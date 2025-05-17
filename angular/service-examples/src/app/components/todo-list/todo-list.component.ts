import { CommonModule } from '@angular/common'
import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms'

import { Todo, TodoControl } from '../../interfaces/todo.interface'
import { CounterService } from '../../services/counter.service'
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, ReactiveFormsModule],
  providers: [CounterService],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  private destroyRef = inject(DestroyRef)
  private fb = inject(FormBuilder)
  private todoService = inject(TodoService)
  counterService = inject(CounterService)

  todos: Todo[] = []
  form = this.initForm()

  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((todos) => (this.todos = todos))
  }

  addTodo(title: string): void {
    this.todoService.addTodo(title)
    this.title.setValue('')
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id)
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTodo(id)
  }

  incrementCounter(): void {
    this.counterService.increment()
  }

  private initForm(): FormGroup<TodoControl> {
    return this.fb.nonNullable.group({
      title: [''],
    })
  }

  get title(): FormControl<string> {
    return this.form.controls.title
  }
}
