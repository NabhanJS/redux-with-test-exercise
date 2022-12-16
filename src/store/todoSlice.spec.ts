import reducer, { addTodo, removeTodo, sortTodos } from "./todoSlice";
import { v4 as uuidv4 } from 'uuid';

describe("testing todos", () => {
    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
          todos: []
        });
      });  

 
})