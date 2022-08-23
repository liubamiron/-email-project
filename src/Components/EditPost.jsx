import {useParams} from "react-router-dom";
import {useState} from "react";
import Header from "./Header";
import {Container} from "react-bootstrap";
import axios from "axios";
import React from "react";
import TodoList from "./TodoList";
import InputField from "./InputField";
import {useDispatch} from "react-redux";
import {addTodo} from "../store/todoSlice";


export interface data {
    id: number;
    title: string;
    image: string;
    description: string;
}

const EditPost = () => {
    const {id} = useParams();

    const [text,setText] = useState('');
    const [data, setData] = React.useState([]);


    // const toggleTodoCompleted = (todoId) => {
        // setTodos(
        //     todos.map(
        //         // todo => {
        //         //     if (todo.id !== todoId) return todo;
        //         //     todo.completed = !todo.completed;
        //         //     return todo
        //         // }
        //     todo => {
        //         if (todo.id !== todoId) return todo;
        //
        //         return {
        //         ...todo,
        //         completed: !todo.completed,
        //         }
        //         }
        //     )
        // )
    //}

    //const removeTodo = (todoId) => {
        // setTodos(todos.filter(todo => todo.id !== todoId))
    //}

    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo({text}))
        setText('');
    };

    const toggleTodoCompleted = (todoId) => {

    }

    async function getAllTodos() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos = await res.json();
        console.log('l', todos);
    }
    console.log('l2', getAllTodos());

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     });

    // const getAllTodos = async () => {
    //     const response = await axios.get(
    //         'https://jsonplaceholder.typicode.com/todos'
    //     );
    //     setData(response.data);
    // };
    // console.log('data', data);
    // console.log('d', getAllTodos());



    return (
        <>
            <Header/>
            <Container>
                <h1>Todo List</h1>
                <h3>Edit Post {id}</h3>
                <div className={"row mb-3"}>
                    <div className={"col-auto"}>
                        <input type={"text"} className={"form-control"}
                               placeholder={"write title"}/>
                    </div>
                    <div className={"col-auto"}>
                        <button id={"addTodo"} className={"btn btn-primary"}>add</button>
                    </div>
                </div>
                <div id={'todos'}>
                    <div className={'form-check'}>
                        <label className={'form-check-label'}>
                            <input type={"checkbox"}
                                   className={"form-check-input"}/>
                                    Some todo
                        </label>
                        <button type="button"
                                className="btn-close"
                                aria-label="Close"
                                style={{fontSize: "10px"}}/>
                    </div>
                </div>

                {/*****************/}
                {/*<label>*/}
                {/*    <input value={text} onChange={(e) => setText(e.target.value)}/>*/}
                {/*    <button onClick={addTodo}>Add Todo</button>*/}
                {/*</label>*/}

                {/*<ul>*/}
                {/*    {*/}
                {/*        todos.map(todo => <li key={todo.id}>*/}
                {/*        <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodoCompleted(todo.id)}/>*/}
                {/*            <span>{todo.text}</span>*/}
                {/*            <span className={"delete"}*/}
                {/*                  onClick={()=> removeTodo(todo.id)}>&times;</span>*/}
                {/*            </li>)*/}
                {/*    }*/}
                {/*</ul>*/}

                <InputField text={text}
                            handleInput={setText}
                            handleSubmit={addTask}/>

                {/*<TodoList*/}
                {/*          toggleTodoCompleted={toggleTodoCompleted}*/}
                {/*          removeTodo={removeTodo}*/}
                {/*/>*/}
                {/*надо пробросить пару функций*/}

                {/*<InputField/>*/}
                <TodoList/>
            </Container>
        </>
    )
}
export {EditPost}