import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

type NewTodo = {
  id: string
  title: string
}

type IsInitial = {
  todos: NewTodo[]
  sortData: boolean
  sortName: string,
  sortEmail: string
  sortPassword: string
}

const initialState: IsInitial = {
  todos:[],
  sortData: false,
  sortName: "Nabhan",
  sortEmail: "nabhan@yahoo.com",
  sortPassword: "123",
}

const todoSlice = createSlice({
  name: 'todos',
  initialState ,

  reducers: {
    addTodo: (state, action:PayloadAction<string> ) => {
      const newTodo = { id: uuidv4(), title: action.payload };
      state.todos = [...state.todos, newTodo]
      },

      removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    sortTodos(state, action) {
      state.sortData = action.payload
      state.todos = state.todos.sort((a, b) => (action.payload ? 1 : -1) * a.title.localeCompare(b.title, "sv"))
    }
  }
})

export const { addTodo, removeTodo, sortTodos } = todoSlice.actions
export default todoSlice.reducer