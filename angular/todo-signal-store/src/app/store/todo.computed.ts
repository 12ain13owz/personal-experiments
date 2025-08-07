import { computed } from '@angular/core'

import { Todo, TodoFilter } from './todo.model'

export function todoFeatures(state: { todos(): Todo[]; filter(): TodoFilter }) {
  return {
    completeTodos: computed(() => state.todos().filter((todo) => todo.completed)),
    incompleteTodos: computed(() => state.todos().filter((todo) => !todo.completed)),
    totalTodos: computed(() => state.todos().length),
    filterTodos: computed(() => {
      const filter = state.filter()
      const todos = state.todos()

      switch (filter) {
        case 'active':
          return todos.filter((todo) => !todo.completed)
        case 'completed':
          return todos.filter((todo) => todo.completed)
        default:
          return todos
      }
    }),
  }
}
