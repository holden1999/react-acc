import React, {Component} from "react";
import CourseList from "./page/CourseList";
import CourseDetail from "./page/CourseDetail";
import Dashboard from "./page/Dashboard";
import NavBar from "./component/NavBar";


const Main = () => {
    const [pageName, setPageName] = React.useState("")
    const [params, setParams] = React.useState(null)
    let component

    switch (pageName) {
        case "course-list":
            Component = CourseList
            break
        case "course-detail":
            Component = CourseDetail
            break
        default:
            Component = Dashboard
    }

    const onNavigate = (route, params) => {
        setPageName(route)
        setParams(params)
    }

        return (
        <>
            <NavBar onNavigate={onNavigate}/>
            <Component params={params}/>
        </>
    )
}
export default Main