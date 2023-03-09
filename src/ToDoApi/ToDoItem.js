import React from "react";

const ToDoItem = (props) => {
    const {todo} = props

    const onUpdate = () => {

    }

    const onDelete = () => {

    }

    return (
        <li>
            <div onClick={onUpdate}>{todo.title}</div>
            <span onClick={onDelete}>x</span>
        </li>
    )
}

export default ToDoItem