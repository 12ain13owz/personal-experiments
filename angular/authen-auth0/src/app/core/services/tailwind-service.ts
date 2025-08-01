import { Injectable } from '@angular/core'
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

@Injectable({
  providedIn: 'root',
})
export class TailwindService {
  cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
  }
}
