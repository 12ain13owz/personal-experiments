import { Routes } from '@angular/router'

import { auth0Guard } from './core/guards/auth0-guard'

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login-module').then((m) => m.LoginModule),
  },
  {
    path: 'launcher',
    canActivate: [auth0Guard],
    loadChildren: () => import('./features/launcher/launcher-module').then((m) => m.LauncherModule),
  },
  {
    path: 'employee',
    canActivate: [auth0Guard],
    loadChildren: () => import('./features/employee/employee-module').then((m) => m.EmployeeModule),
  },
  {
    path: 'claim',
    canActivate: [auth0Guard],
    loadChildren: () => import('./features/claim/claim-module').then((m) => m.ClaimModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
]
