import React from 'react';
import {useDispatch} from "react-redux";
import {toggleTodoCompleted} from "../store/todoSlice";
import {removeTodo} from "../store/todoSlice";


// todos приходять через props {id, text, completed} то что мы ожидаем получить
// removeTodo and toggleTodoCompleted достаются из пропсов после того опракинули по веткам
const TodoItem = ({id, text, completed}) => {

    const dispatch = useDispatch();


    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={()=> dispatch(toggleTodoCompleted({id}))}
            />
            <span>{text}</span>
            <span className={"delete"}
                  onClick={()=> dispatch(removeTodo({id}))} role="button">
                &times;
            </span>
        </li>
    );
}

export default TodoItem;

