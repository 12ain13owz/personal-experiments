import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { TODOS } from '../constants/todo.const'
import { Todo } from '../interfaces/todo.interface'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = TODOS
  private todos$ = new BehaviorSubject<Todo[]>(this.todos)

  getTodos(): Observable<Todo[]> {
    return this.todos$.asObservable()
  }

  getCompletedTodos(): Observable<Todo[]> {
    return new Observable((observer) => {
      this.todos$.subscribe((todos) => {
        observer.next(todos.filter((todo) => todo.completed))
      })
    })
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: title.trim(),
      completed: false,
    }

    this.todos = [...this.todos, newTodo]
    this.todos$.next(this.todos)
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id)
    this.todos$.next(this.todos)
  }

  toggleTodo(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    this.todos$.next(this.todos)
  }
}
