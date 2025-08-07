import { signalStore, withComputed, withMethods, withState } from '@ngrx/signals'

import { todoActions } from './todo.actions'
import { todoFeatures } from './todo.computed'
import { initialState } from './todo.model'

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(todoActions),
  withComputed(todoFeatures)
)
