import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers : {
        addTodo(state, action) {
           // console.log(state);
            //console.log(action);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed:false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggleTodo.completed = !toggleTodo.completed;
        },
    },
});

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;

export default todoSlice.reducer;