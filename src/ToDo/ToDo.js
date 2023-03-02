const listStyle = (complete) => ({
    textDecoration: complete ? "line-through" : null
})
const ToDo = (props) => {
    const {todo, handleToggle} = props

    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }

    return (
        <li
            id={todo.id}
            onClick={handleClick}
            style={listStyle(todo.complete)}
        >
            {todo.task}
        </li>
    )
}

export default ToDo