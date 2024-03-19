import { Menu } from "./headerMenu";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <h1 className="header-heading">Trend <br /> Campus</h1>
            <div className="headerMenu">
                {Menu.map((data, index) => (
                    <span>{data}</span>
                ))}
            </div>
            <div className="headerActions">
                <button>Contact Us</button>
                <h1>TREND</h1>
            </div>
        </header>
    )
}

export default Header;