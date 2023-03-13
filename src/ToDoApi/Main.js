import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const Main = () => {
    const [shouldRefresh, setShouldRefresh] = React.useState(true)

    return (
        <div className={"content"}>
            <Form onRefresh={setShouldRefresh}/>
            <ToDoList shouldRefresh={shouldRefresh} onRefresh={setShouldRefresh}/>
        </div>
    )
}

export default Main