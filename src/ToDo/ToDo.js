const ToDo = (props) => {
    const {todo, handleToggle} = props
    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }

    return (
        <li id={todo.id} onClick={handleClick}>
            {todo.task}
        </li>
    )
}

export default ToDo