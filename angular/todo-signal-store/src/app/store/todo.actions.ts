import { patchState, WritableStateSource } from '@ngrx/signals'

import { Todo, TodoFilter } from './todo.model'

type TodoStore<T> = T & WritableStateSource<object>

export function todoActions<T extends { todos(): Todo[] }>(store: TodoStore<T>) {
  return {
    addTodo(title: string) {
      patchState(store, {
        todos: [
          {
            title,
            id: Date.now().toString(),
            completed: false,
          },
          ...store.todos(),
        ],
      })
    },

    toggleTodo(id: string) {
      patchState(store, {
        todos: store
          .todos()
          .map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
      })
    },

    changeFilter(filter: TodoFilter) {
      patchState(store, { filter })
    },
  }
}
