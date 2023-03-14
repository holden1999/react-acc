import React, {Component} from "react";
import CourseList from "./page/CourseList";
import CourseDetail from "./page/CourseDetail";
import Dashboard from "./page/Dashboard";
import NavBar from "./component/NavBar";
import {Route, Routes} from "react-router-dom";
import {PATH} from "./navigation/constant";


const Main = () => {
    // const [pageName, setPageName] = React.useState("")
    // const [params, setParams] = React.useState(null)
    // let component
    //
    // switch (pageName) {
    //     case "course-list":
    //         Component = CourseList
    //         break
    //     case "course-detail":
    //         Component = CourseDetail
    //         break
    //     default:
    //         Component = Dashboard
    // }
    //
    // const onNavigate = (route, params) => {
    //     setPageName(route)
    //     setParams(params)
    // }

        return (
        <>
            <NavBar />
            <Routes>
                <Route index={true} element={<Dashboard/>}/>
                <Route path={PATH.COURSE_LIST} element={<CourseList/>}/>
                <Route path={`${PATH.COURSE_DETAIL}/:id?`} element={<CourseDetail/>}/>
            </Routes>
        </>
    )
}
export default Main