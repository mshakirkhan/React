import Cart from "./Cart";
import { useState } from "react";
import mockData from "../utils/mockData";

const CartBody = () => {
    const [data, setData] = useState(mockData);
    return (
        <div className='cardContainer'>
            {
                data.products.map((cartData) => {
                    return <Cart key={cartData.id} cartDetails={cartData} />
                })
            }
        </div>
    )
}

export default CartBody;