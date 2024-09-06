import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return <div className='menu'>
        <div className='logo'><Link to={"/"}>LOGO</Link></div>
        <div className='headerMenu'>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/view-cart"}>Cart ({cartItems.length})</Link></li>
            </ul>
        </div>
    </div>
}

export default Header;