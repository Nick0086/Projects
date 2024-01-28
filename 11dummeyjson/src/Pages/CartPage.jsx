import React from 'react'
import CartProducts from '../Components/CartProducts';
import Container from "../Components/Container"
import ProductBill from '../Components/ProductBill';

function CartPage() {
    return (
        <Container>
        <h2 className='text-3xl text-center lg:my-10 md:my-6 my-4 font-bold' >Your Cart</h2>
        <div className='grid grid-cols-12 md:gap-8 gap-y-4' >
            <div className='md:col-span-9 col-span-12 '>
                <CartProducts />
            </div>
            <div className='md:col-span-3 col-span-12'>
                <ProductBill/>
            </div>
        </div>
        </Container>
    )
}

export default CartPage;