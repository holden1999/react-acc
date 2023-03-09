const URL = "http://localhost:8000/todos"

export const getTodo = (callback) => {
    fetch(URL).then((res) => {
        return res.json()
    }).then((data) => {
        callback(data)
    })
}



export const addTodo = (title, onRefresh) => {
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
        onRefresh(true)
    })
}