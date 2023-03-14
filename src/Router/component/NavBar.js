const styles = {
    margin: 10
}
const NavBar = ({onNavigate}) => {
    return (
        <nav>
            <button style={styles}
                    onClick={() => onNavigate("course-list")}
            >Course List</button>
            <button style={styles}
                    onClick={() => onNavigate("course-detail", 2)}
            >Course Detail</button>
        </nav>
    )
}
export default NavBar