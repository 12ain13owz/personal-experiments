import { Injectable } from '@angular/core'

@Injectable()
export class CounterService {
  private counter = 0

  increment(): number {
    return ++this.counter
  }

  getCount(): number {
    return this.counter
  }
}
