import React from "react";
const ToDoForm = () => {
    const [userInput, setUserInput] = React.useState("")
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = () => {
        setUserInput("")
    }

    return (
        <form onSubmit={null}>
            <input
            type={"text"}
            placeholder={"Enter to do"}
            onChange={}
            value={userinput}
            />
            <button>Submit</button>
        </form>
    )
}