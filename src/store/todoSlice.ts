import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { 
    todos: [
        {
            id: uuidv4(),
            title: "do the homework"
        }
    ]
   },

  reducers: {
    addTodo: (state, action) => {
        state.todos.push({id:  uuidv4(), title: action.payload})
      },
      
      removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    sortTodos(state, action) {
      
    }
  }
})

export const { addTodo, removeTodo, sortTodos } = todoSlice.actions
export default todoSlice.reducer