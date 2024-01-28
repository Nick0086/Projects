import React from 'react'
import { useSelector } from 'react-redux';
import SingleCartProduct from './singleCartProduct';


function CartProducts() {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <div className='md:grid hidden  grid-cols-12  lg:gap-1 md:gap-0 text-center lg:text-lg text-base capitalize font-medium my-2 py-2 border-b-2' >
                <div className='md:col-span-2'>thumbnail</div>
                <div className='md:col-span-3'>product details</div>
                <div className='md:col-span-3 '>quantity</div>
                <div className='md:col-span-1'>price</div>
                <div className='md:col-span-2'>total</div>
                <div className='col-span-1 '></div>
            </div>
            {
                cartItems.length > 0 && cartItems.map((item) => (
                    <div key={item.id} className='grid grid-cols-12 lg:gap-1 md:gap-0 gap-x-5 gap-y-2 lg:p-2 p-1 relative border-[1px] border-gray-500 rounded-xl my-2'>
                        <SingleCartProduct item={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default CartProducts;