import Button from "./Button";
import ToggleButton from "./Toggle";

const Header = () => {
    const style = {
        padding: "10px 5px",
        borderBottom: "1px solid",
        marginBottom: 10,
        display: "flex",
        gap: 5,
        justifyContent: "flex-end"
    }

    return (
        <header style={style}>
            <Button>Beranda</Button>
            <ToggleButton />
        </header>
    )
}

export default Header