import React from "react";
import {deleteTodo, updateToDo} from "./services/api";
import useMutation from "./hook/useMutation";

const ToDoItem = (props) => {
    const {todo, onRefresh} = props

    const {loading: loadingUpdate, fetchMutation: fetchUpdate} = useMutation(updateToDo, {
        onSuccess: () => {
            onRefresh(true)
        }
    })

    const {loading: loadingDelete, fetchMutation: fetchDelete} = useMutation(deleteTodo, {
        onSuccess: () => {
            onRefresh(true)
        }
    })

    const onUpdate = () => {
        fetchUpdate(todo)
    }

    const onDelete = () => {
        fetchDelete(todo.id)
    }

    return (
        <li className={`${todo.done ? "checked" : ""}`}>
            <div onClick={onUpdate}>{todo.title}</div>
            <span className={"close"} onClick={onDelete}>x</span>
        </li>
    )
}

export default ToDoItem