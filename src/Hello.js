import React from "react";

const buttonStyle = (lang) => {
    padding: 20,
    fontSize: 18,
    backgroundColor: lang === "id" ? "blue" : "green"
}

const Hello = () => {
    const [lang, setLang] = React.useState("id")
    const [toggle, setToggle] = React.useState(false)

    React.useEffect(()=> {
        setLang(!toggle ? "id" : "en")

        return () => {

        }
    }, [toggle])

    return (
        <div>
            <h1>{lang === "id" ? "Halo Dunia" : "Hello World"}</h1>
            <button style={buttonStyle(lang)} onClick={() => setToggle()} => {
            }}>Click
            </button>
        </div>
    )
}

export default Hello