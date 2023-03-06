import React from "react";
import './App.css';
import Header from "./ToDo/Header";
import ToDoList from "./ToDo/ToDoList";
import ToDoForm from "./ToDo/ToDoForm";

function setState(value) {

}


function onSubmit() {

}

function ToDo() {
    //const nameRef = React.useRef(null)

    // React.useEffect(()=>{
    //     if (nameRef != null) {
    //         console.log(nameRef)
    //     }
    // },[nameRef])


  //   return (
  //   <div className="ToDo">
  //     <form onSubmit={onSubmit}>
  //         <input
  //         type={"text"}
  //         name={"name"}
  //         ref={(ref) => nameRef(ref)}
  //         onChange={(event )=> setState(event.target.value)}
  //         />
  //         <button type={"submit"}>Submit</button>
  //     </form>
  //   </div>
  // );


    const [toDoList, setToDoList] = React.useState([])
    const addTask = (value) => {
        let newToDoList = [...toDoList]
        newToDoList = [
            ...newToDoList,
            {
                id: toDoList.length + 1,
                task: value,
                complete: false
            }
        ]
        setToDoList(newToDoList)
    }
    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ?
                {...task, complete: !task.complete} : {...task}
        })
        setToDoList(mapped)
    }

    return (
        <div className={"App"}>
            <Header />
            <ToDoForm addTask={addTask}/>
            <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
        </div>
    )
}

export default ToDo;
