import {ThemeProvider} from "./context/Theme";
import Main from "./component/Main";
import "../App";


const Landing = () => {

    const object = {
        name : "name",
        age: "age",
        gender: "gender"
    }
    const {name, ...other} = object

    console.log("name", other)


    return (
        <div className={"App"}>
            <ThemeProvider>
                <Main />
            </ThemeProvider>
        </div>
    )
}

export default Landing