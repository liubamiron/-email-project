import React from 'react';
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";
// todos приходять через props {todos} то что мы ожидаем получить
// через спред оператор весь todo отправлять - {...todo}



const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <ul>
            {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))}
        </ul>
    );
};

export default TodoList;
