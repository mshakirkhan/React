import Cart from "./Cart";
import { useState } from "react";
import mockData from "../utils/mockData";
console.log(mockData);

const CartBody = () => {
    const [data, setData] = useState(mockData);

    const topRatedHandler = () => {
        const filteredData = data.products.filter((rt) => (rt.rating > 4));
        setData({
            products: filteredData
        });
    }

    return (
        <>
            <div className="topRatedContainer"><button className="topRatedButton" onClick={topRatedHandler}>Top Rated Products</button></div>
            <div className='cardContainer'>
                {
                    data.products.map((cartData) => {
                        return <Cart key={cartData.id} cartDetails={cartData} />
                    })
                }
            </div>
        </>
    )
}

export default CartBody;