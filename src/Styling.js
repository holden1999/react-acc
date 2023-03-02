import React from "react";

//object style
const styles = {
    header:(active) => ({backgroundColor: active ? "red": "blue"}),
    body: {color: "blue"}
}

const Header = (props) => {
    return (
        <div>
            <h1 style={{backgroundColor:"red"}}>Ini Header</h1>
            <h1 style={styles.header(props.active)}>Ini Header</h1>
            <h1 style={styles.body}>test</h1>

            <h1 className={"header body"}>Ini Header</h1>
        </div>
    )
}
export default Header