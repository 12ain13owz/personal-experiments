import { FormControl } from '@angular/forms'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface TodoControl {
  title: FormControl<string>
}
