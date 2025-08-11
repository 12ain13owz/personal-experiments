import { Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { TodoStore } from './store/todo.store'

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private fb = inject(FormBuilder)
  private store = inject(TodoStore)

  todoForm = this.fb.group({ title: [''] })
  todoStore = this.store

  addTodo() {
    const title = this.todoForm.controls.title
    if (!title.value) return

    this.store.addTodo(title.value)
    title.setValue('')
  }

  toggleTodo(id: string) {
    this.store.toggleTodo(id)
  }
}
