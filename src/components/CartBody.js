import Cart from "./Cart";
import { useState, useEffect } from "react";
import mockData from "../utils/mockData";
import useFetchProductData from "../utils/useFetchProductData";
import useOnlineStatus from "../utils/useOnlineStatus";
console.log(useOnlineStatus);

const CartBody = () => {
    const apiData = useFetchProductData();
    const isOnline = useOnlineStatus();

    const [data, setData] = useState(apiData);
    useEffect(() => {
        setData(apiData);
      }, [apiData]);

    const topRatedHandler = () => {
        const filteredData = data.filter((rt) => (rt.rating > 4));
        setData(filteredData);
    }

    if(isOnline === false) return <h1>Seems like you are offline, Please check your internet connection!</h1>

    return (
        <>
            <div className="topRatedContainer"><button className="topRatedButton" onClick={topRatedHandler}>Top Rated Products</button></div>
            <div className='cardContainer'>
                {
                    data.map((cartData) => {
                        return <Cart key={cartData.id} cartDetails={cartData} />
                    })
                }
            </div>
        </>
    )
}

export default CartBody;