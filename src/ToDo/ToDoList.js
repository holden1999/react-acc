import ToDo from "./ToDo";
const ToDoList = (props) => {
    const {toDoList, handleToggle} = props

    return (
        toDoList.map(todo => {
            return (
                <ToDo
                    key={todo.id + todo.task}
                    todo={todo}
                    handleToggle={handleToggle}
                />
            )
        })
    )
}

export default ToDoList