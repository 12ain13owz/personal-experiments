import { Routes } from '@angular/router'

import { TodoCompletedComponent } from './components/todo-completed/todo-completed.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'

export const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'completed', component: TodoCompletedComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: '**', redirectTo: '/todos', pathMatch: 'full' },
]
