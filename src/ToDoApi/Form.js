import React from "react";
import {addTodo} from "./services/api";
import useMutation from "./hook/useMutation";

const Form = (props) => {
    const [title, setTitle] = React.useState("")
    const {loading, fetchMutation} = useMutation(addTodo, {
        onSuccess: () => {
            props.onRefresh(true)
        },
        onFailed: () => {}
    })

    const onSubmit = () => {
        fetchMutation(title)
        setTitle("")
    }

    return (
        <div className={"header"}>
            <h2>Simple ToDo App</h2>
            <input type={"text"} value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button className={"addBtn"} onClick={onSubmit} disabled={loading}>Add</button>
        </div>
    )
}

export default Form