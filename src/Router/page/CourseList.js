import {useNavigate} from "react-router-dom";
import {PATH} from "../navigation/constant";
const CourseList = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Course List</h1>

            <button onClick={() => navigate(PATH.COURSE_DETAIL, {
                state: {
                    id: 123
                }
            })}>Go to detail</button>
        </>
    )
}

export default CourseList