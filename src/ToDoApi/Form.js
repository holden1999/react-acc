import React from "react";
import {addTodo} from "./services/api";

const Form = (props) => {
    const [title, setTitle] = React.useState("")

    const onSubmit = () => {
        addTodo(title, props.onRefresh)
    }

    return (
        <div>
            <h2>Simple ToDo App</h2>
            <input type={"text"} value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Form