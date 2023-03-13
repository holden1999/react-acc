const URL = "http://localhost:8000/todos/"

export const getTodo = () => {
    return fetch(URL)
}

export const addTodo = (title) => {
    const payload = {
        title: title,
        done: false
    }
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(() => {
        console.log("payload", payload)
    })
}

export const updateToDo = (todo, callback) => {
    todo.done = !todo.done

    return fetch(URL + todo.id, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
    })
}

export const deleteTodo = (id) => {
    return fetch(URL + id, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
}