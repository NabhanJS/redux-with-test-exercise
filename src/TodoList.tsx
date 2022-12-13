import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useDispatch, useSelector  } from 'react-redux'
import { addTodo, removeTodo, sortTodos } from './store/todoSlice';

type allTodo = {
    id: string,
    title: string
}

const TodoList = () => {
    const [title, setTitle ] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector((state: any) => state.todoReducer.todos);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addTodo(title))
    }

    return ( <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={(e) => setTitle(e.target.value)} value={title}/>
                    
                    <button type="submit" disabled={title.length === 0}>Lägg till</button>
                </form>

                {/* <h2>Todo<button onClick={() => { setFilterDescending(!filterDescending); sortTodos(filterDescending) }}>{filterDescending ? <FaArrowUp /> : <FaArrowDown />}</button></h2> */}

                {todos.length ?
                    <ul>
                        {todos.map((todo: any) => <li key={todo.title}>{todo.title} <button onClick={() => dispatch(removeTodo(todo.id))}>Ta bort</button></li>)}
                    </ul> : <p>Du har inga todos</p>}
            </div>
    )
}

export default TodoList;