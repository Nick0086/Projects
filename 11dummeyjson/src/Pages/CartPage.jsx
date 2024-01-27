import React from 'react'
import CartProducts from '../Components/CartProducts';
import Container from "../Components/Container"

function CartPage() {
    return (
        <Container>
        <div className='grid grid-cols-12 md:gap-4 gap-y-4' >
            <div className='md:col-span-9'>
                <CartProducts />
            </div>
            <div className='md:col-span-3'></div>
        </div>
        </Container>
    )
}

export default CartPage;