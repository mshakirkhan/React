import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Cart = (props) => {
    const dispatch = useDispatch();
    const {id, title, thumbnail, price, description, rating} = props.cartDetails;
    const handleCart = (detail) => {
        dispatch(addItem(detail));
    }
    return (
        <div className="product-card">
            <img src={thumbnail} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                <h3 className="product-title">Rating: ({rating})</h3>
                <button href="#" className="buy-button" onClick={() => handleCart(props.cartDetails)}>Add To Cart</button>
            </div>
        </div>
    )
}

export const topRatedCart = (Cart) => {
    return (props) => (
        <>
            <label>Top Rated</label>
            <Cart {...props} />
        </>
    )
}

export default Cart;