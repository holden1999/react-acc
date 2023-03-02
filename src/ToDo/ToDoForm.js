import React from "react";
const ToDoForm = (props) => {
    const {addTask} = props
    const [userInput, setUserInput] = React.useState("")
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    const handleReset = (event) => {
        event.preventDefault()
        console.log("reset")
    }

    return (
        <form
            onSubmit={handleSubmit} onReset={handleReset}>
            <input
            type={"text"}
            placeholder={"Enter To Do"}
            onChange={handleChange}
            value={userInput}
            />
            <button>Submit</button>
            <button type={"reset"}>Cancel</button>
        </form>
    )
}
export default ToDoForm