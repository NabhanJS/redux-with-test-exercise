import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

type NewTodo = {
  id: string
  title: string
}

type IsInitial = {
  todos: NewTodo[]
}

const initialState: IsInitial = {
  todos:[]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState ,

  reducers: {
    addTodo: (state, action: PayloadAction<string> ) => {
      const newTodo = { id: uuidv4(), title: action.payload };
      state.todos = [...state.todos, newTodo]
      },
      
      removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    sortTodos(state, action) {
      state.todos = state.todos.sort()
    }
  }
})

export const { addTodo, removeTodo, sortTodos } = todoSlice.actions
export default todoSlice.reducer