export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoFilter = 'all' | 'active' | 'completed'

export interface TodoState {
  todos: Todo[]
  filter: TodoFilter
}

export const initialState: TodoState = {
  todos: [
    { id: '1', title: 'Buy milk ', completed: false },
    { id: '2', title: 'Read a book', completed: true },
    { id: '3', title: 'take a walk', completed: false },
  ],
  filter: 'all',
}
