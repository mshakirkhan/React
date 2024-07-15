import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return <div className='menu'>
        <div className='logo'>LOGO</div>
        <div className='headerMenu'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
}
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

const CartBody = () => {
    return (
        <div className='cardContainer'>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    )
}

const AppLayout = () => {
   return (
    <div className='container'>
        <Header />
        <CartBody/>
    </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);