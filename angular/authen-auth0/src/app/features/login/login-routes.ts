import { Routes } from '@angular/router'

import { Login } from './pages/login/login'
import { LoginCallback } from './pages/login-callback/login-callback'

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'callback', component: LoginCallback },
]
