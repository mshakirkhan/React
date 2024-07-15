const Cart = () => {
    return (
        <div className="product-card">
            <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" alt="Product 1" className="product-image" />
            <div className="product-info">
                <h3 className="product-title">Product 1</h3>
                <p className="product-price">$19.99</p>
                <p className="product-description">This is a short description of Product 1.</p>
                <a href="#" className="buy-button">View Details</a>
            </div>
        </div>
    )
}

export default Cart;