import React, { useState, useEffect } from 'react'

const useFetchProductData = () => {
    const [productInfo, setProductInfo] = useState([]);
    const getProductsFromApi = async () => {
        let data = await fetch(`https://dummyjson.com/products`);
        data = await data.json();
        setProductInfo(data.products);
    }

    useEffect(() => {
        getProductsFromApi();
    },[]);

    return productInfo;
}

export default useFetchProductData