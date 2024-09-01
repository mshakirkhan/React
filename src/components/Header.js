import { Link } from "react-router-dom";

const Header = () => {
    return <div className='menu'>
        <div className='logo'>LOGO</div>
        <div className='headerMenu'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    </div>
}

export default Header;