import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

import { TailwindService } from '../../../../core/services/tailwind-service'

@Component({
  selector: 'app-claim-list',
  imports: [FormsModule],
  templateUrl: './claim-list.html',
  styleUrl: './claim-list.scss',
})
export class ClaimList {
  private router = inject(Router)
  private tailwind = inject(TailwindService)

  claims = [
    { id: 'C001', date: '2025-07-01', amount: 500, status: 'Pending' },
    { id: 'C002', date: '2025-07-02', amount: 1200, status: 'Approved' },
    { id: 'C003', date: '2025-07-03', amount: 300, status: 'Rejected' },
  ]

  filteredClaims = this.claims
  searchQuery = ''
  selectedStatus = ''

  get containerClasses() {
    const layout = ['min-h-screen', 'flex', 'flex-col', 'items-center']
    const appearance = ['bg-white']
    const responsive = ['p-4', 'sm:p-6']
    return this.tailwind.cn([...layout, ...appearance, ...responsive])
  }

  get headerClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-4', 'flex', 'justify-between', 'items-center', 'mb-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get filterClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-4', 'mb-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get tableContainerClasses() {
    const layout = ['w-full', 'max-w-4xl', 'p-4']
    const appearance = ['bg-white', 'rounded-lg', 'shadow-md']
    const responsive = ['overflow-x-auto']
    return this.tailwind.cn([...layout, ...appearance, ...responsive])
  }

  get tableClasses() {
    const layout = ['min-w-full']
    const appearance = ['divide-y', 'divide-gray-200']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get thClasses() {
    const layout = ['px-4', 'py-2', 'text-left']
    const appearance = ['text-sm', 'font-semibold', 'text-gray-700']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get tdClasses() {
    const layout = ['px-4', 'py-2']
    const appearance = ['text-sm', 'text-gray-600']
    return this.tailwind.cn([...layout, ...appearance])
  }

  get inputClasses() {
    const layout = ['px-3', 'py-2']
    const appearance = ['border', 'border-gray-300', 'rounded-lg']
    const interaction = ['focus:outline-none', 'focus:ring-2', 'focus:ring-indigo-500']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  get selectClasses() {
    const layout = ['px-3', 'py-2']
    const appearance = ['border', 'border-gray-300', 'rounded-lg']
    const interaction = ['focus:outline-none', 'focus:ring-2', 'focus:ring-indigo-500']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  get buttonClasses() {
    const layout = ['px-4', 'py-2']
    const appearance = ['bg-indigo-500', 'text-white', 'rounded-lg', 'font-semibold']
    const interaction = ['hover:bg-indigo-600', 'transition']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  get clearButtonClasses() {
    const layout = ['px-4', 'py-2']
    const appearance = ['bg-gray-500', 'text-white', 'rounded-lg', 'font-semibold']
    const interaction = ['hover:bg-gray-600', 'transition']
    return this.tailwind.cn([...layout, ...appearance, ...interaction])
  }

  filterClaims() {
    this.filteredClaims = this.claims.filter((claim) => {
      const matchesSearch = this.searchQuery ? claim.id.toLowerCase().includes(this.searchQuery.toLowerCase()) : true
      const matchesStatus = this.selectedStatus ? claim.status === this.selectedStatus : true
      return matchesSearch && matchesStatus
    })
  }

  clearFilters() {
    this.searchQuery = ''
    this.selectedStatus = ''
    this.filteredClaims = this.claims
  }

  goBack() {
    this.router.navigate(['/launcher'])
  }
}
