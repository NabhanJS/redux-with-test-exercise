import reducer, { addTodo, removeTodo, sortTodos } from "./todoSlice";
import { v4 as uuidv4 } from 'uuid';

describe("testing todos", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
          todos: []
        });
      });  

      it("should add todo", () => {
        const prevState = { todos: []};
        expect(reducer(prevState, addTodo("do the homework"))).toEqual({
          todos: [{ id: "42b892a4-5000-4202-86c0-5bcb1b47ee16", title: "do the homework" }]
        });
      });  

      it("should remove todo", () => {
        const prevState = { todos: []};
        expect(reducer(prevState, removeTodo("do the homework"))).toEqual({
          todos: []
        });
      });  
})