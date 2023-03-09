import React from "react";
import ToDoItem from "./ToDoItem";
import {getTodo} from "./services/api";

const ToDoList = (props) => {
    const [todos, setTodos] = React.useState([])
    const {shouldRefresh, onRefresh} = props

    React.useEffect(() => {
        if (props.shouldRefresh) {
            getTodo(setTodos)
            onRefresh(false)
        }
    },[shouldRefresh])

    return (
        <ul>
            {todos.map((todo) => {
            return (
                <ToDoItem todo={todo} key={todo.id} />
            )
            })}
        </ul>
    )
}

export default ToDoList