import {useEffect, useState} from "react";

import {todoService} from "../../services/todoService";
import {Todo} from "./Todo";
import css from './Todos.module.css'

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        todoService.getAll().then(({data}) => setTodos(data))
    }, []);


    return (
        <div className={css.listTodos}>
            {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
        </div>
    );
};

export {Todos};
