import React from 'react'
import { useSelector } from 'react-redux';
import SingleCartProduct from './singleCartProduct';


function CartProducts() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <div className='grid grid-cols-12 gap-1 text-center text-lg capitalize font-medium my-2 py-2 border-b-2' >
                <div className='col-span-2'>thumbnail</div>
                <div className='col-span-3'>product details</div>
                <div className='col-span-3'>quantity</div>
                <div className='col-span-1'>price</div>
                <div className='col-span-1'>total</div>
                <div className='col-span-2 '></div>
            </div>
            {
                cartItems.length > 0 && cartItems.map((item) => (
                    <div key={item.id} className='grid grid-cols-12 gap-1 p-2 border-[1px] border-gray-500 rounded-xl my-2'>
                        <SingleCartProduct item={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default CartProducts;