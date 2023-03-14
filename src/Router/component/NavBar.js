import {Link} from "react-router-dom";
import {PATH} from "../navigation/constant";

const styles = {
    margin: 10
}
const NavBar = ({onNavigate}) => {
    return (
        <nav>
            <Link style={styles}
                  to={PATH.COURSE_LIST}
            >Course List</Link>
            <Link style={styles}
                  to={PATH.COURSE_DETAIL}
                  state={{
                      id: 3
                  }}
            >Course Detail</Link>
        </nav>
    )
}
export default NavBar