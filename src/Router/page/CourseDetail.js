import {useLocation, useParams, useNavigate} from "react-router-dom";
import {PATH} from "../navigation/constant";


const CourseDetail = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    return (
        <>
            <h1>Course Detail</h1>
            <p>params: {params.id}</p>
            <p>params state: {location.state.id}</p>

            <button onClick={() => navigate(PATH.COURSE_LIST)}>Go to list</button>
        </>
    )
}

export default CourseDetail