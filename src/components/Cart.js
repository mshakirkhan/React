const Cart = (props) => {
    const {id, title, thumbnail, price, description, rating} = props.cartDetails;
    return (
        <div className="product-card">
            <img src={thumbnail} alt={title} className="product-image" />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                <h3 className="product-title">Rating: ({rating})</h3>
                <a href="#" className="buy-button">View Details</a>
            </div>
        </div>
    )
}

export default Cart;