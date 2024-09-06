import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clearCart } from './utils/cartSlice';

const ViewCart = () => {
    const cart = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(clearCart());
    }
  return (
    <>
    <button onClick={handleCart}>Clear All</button>
    <table id='cart'>
        <thead>
            <tr>
                <th>Sno</th>
                <th>Image</th>
                <th>Porduct Name</th>
                <th>Porduct Price</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map((items, index) => (
                    <tr key={items.id}>
                        <td>{index + 1}</td>
                        <td><img src={items.thumbnail} width={100}/></td>
                        <td>{items.title}</td>
                        <td>{items.price}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

export default ViewCart