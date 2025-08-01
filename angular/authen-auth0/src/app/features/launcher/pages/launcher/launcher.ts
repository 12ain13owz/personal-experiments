import { Component, inject, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService, User } from '@auth0/auth0-angular'
import { take } from 'rxjs'

import { TailwindService } from '../../../../core/services/tailwind-service'

@Component({
  selector: 'app-launcher',
  imports: [],
  templateUrl: './launcher.html',
  styleUrl: './launcher.scss',
})
export class Launcher implements OnInit {
  private router = inject(Router)
  private authService = inject(AuthService)
  private tailwind = inject(TailwindService)

  user: User | null | undefined = null
  features = [
    {
      name: 'Employee Management',
      path: 'employee',
      logo: 'https://img.freepik.com/free-vector/simple-business-people-icons_23-2147491693.jpg',
    },
    {
      name: 'Claim System',
      path: 'claim',
      logo: 'https://img.freepik.com/free-vector/simple-letter-i-initial-logo-company-business_530521-1314.jpg',
    },
  ]

  ngOnInit(): void {
    this.authService.user$.pipe(take(1)).subscribe((user) => (this.user = user))
  }

  get containerClasses() {
    const layout = ['min-h-screen', 'flex', 'flex-col', 'items-center', 'p-4', 'sm:p-6']
    const appearance = ['bg-white']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get headerClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-4', 'flex', 'justify-between', 'items-center', 'mb-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get profileClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-6', 'flex', 'items-center', 'mb-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get featureContainerClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-6', 'grid', 'grid-cols-1', 'sm:grid-cols-2', 'gap-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get cardClasses() {
    const layout = ['p-4', 'flex', 'flex-col', 'items-center']
    const appearance = ['bg-gradient-to-r', 'from-indigo-50', 'to-blue-200', 'rounded-lg', 'shadow-md']
    const interaction = ['hover:shadow-lg', 'transition', 'duration-200']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  get logoClasses() {
    const layout = ['w-12', 'h-12', 'mb-2']
    const appearance = ['rounded-full']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get buttonClasses() {
    const layout = ['px-4', 'py-2', 'text-center']
    const appearance = ['bg-indigo-500', 'text-white', 'rounded-lg', 'font-semibold']
    const interaction = ['cursor-pointer', 'hover:bg-indigo-600', 'transition']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  get logoutButtonClasses() {
    const layout = ['px-3', 'py-1', 'text-sm']
    const appearance = ['bg-red-500', 'text-white', 'rounded', 'font-semibold']
    const interaction = ['cursor-pointer', 'hover:bg-red-600', 'transition']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  navigateTo(feature: string) {
    this.router.navigate([`/${feature}`])
  }

  logout() {
    this.authService.logout({ logoutParams: { returnTo: window.location.origin } })
  }
}
