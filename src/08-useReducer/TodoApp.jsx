import { useReducer, useEffect } from 'react';

import {todoReducer} from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export const TodoApp = () => {

    const initialState = [

    ]

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) =>{
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

  return (
    <>
        <h1>TodoApp (10), <small>Pendientes: 2</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} />
            </div>
            <div className="col-5">
                <h4>Agregar un TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
    </>
  )
}
