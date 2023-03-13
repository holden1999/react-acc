import React from "react";
import ToDoItem from "./ToDoItem";
import {getTodo} from "./services/api";
import useQuery from "./hook/useQuery";

const ToDoList = (props) => {
    const {shouldRefresh, onRefresh} = props
    const {data, loading, error, refetch} = useQuery(getTodo, {
        shouldRefresh,
        onSuccess: () => {
            onRefresh(true)
        },
        onFailed: () => {

        },
        onFinish: () => {
            onRefresh(false)
        }
    })

    React.useEffect(() => {
        if (shouldRefresh) {
            refetch()
            onRefresh(false)
        }
    },[shouldRefresh])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return (
            <>
                <h1>Error!</h1>
                <p>{error}</p>
            </>
        )
    }

    return (
        <ul>
            {data.map((todo) => {
            return (
                <ToDoItem todo={todo} key={todo.id} onRefresh={onRefresh}/>
            )
            })}
        </ul>
    )
}

export default ToDoList