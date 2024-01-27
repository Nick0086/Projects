import React, { useState } from 'react'
import Button from './Button';
import { useDispatch } from 'react-redux';
import { removetoCart, updateCartQuantity } from '../Slice/CartSlice';

function SingleCartProduct({ item }) {
    const [qty, setQty] = useState(item.qty);
    const dispatch = useDispatch()

    const handleQtyChange = (newQty) => {
        // Update local state
        setQty(newQty);
        // Dispatch action to update Redux store
        dispatch(updateCartQuantity({ id: item.id, qty: newQty }));
    };

    return (
        <>
            <div className='col-span-2'>
                <img src={`${item.thumbnail}`} alt={item.title} className='aspect-video rounded-lg' />
            </div>
            <div className='col-span-3 flex justify-center flex-col' >
                <div className='w-[80%] mx-auto' >
                    <h2 className='text-lg font-medium mb-1' >{item.title}</h2>
                    <p className='text-sm tracking-tight' >{item.brand}</p>
                </div>
            </div>
            <div className='col-span-3 flex justify-center items-center'>
                <Button className='p-[0px] px-[0px] h-7 w-7 me-2 flex justify-center items-center bg-slate-400' disabled={qty <= 1} onClick={() => handleQtyChange(qty - 1)} >-</Button>
                <p className='w-5 text-center' >{qty}</p>
                <Button className='p-[0px] px-[0px] h-7 w-7 ms-2 flex justify-center items-center bg-slate-400' disabled={qty >= 10} onClick={() => handleQtyChange(qty + 1)} >+</Button>
            </div>
            <div className='col-span-1  flex justify-center items-center'>
                <p>
                    ₹{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}
                </p>
            </div>
            <div className='col-span-1 flex justify-center items-center'>
                <p>
                    ₹{qty * (item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}
                </p>
            </div>
            <div className='col-span-2 text-center flex justify-center items-center '>
                <Button className='px-3 ' onClick={() => dispatch(removetoCart(item.id))} >Remove</Button>
            </div>
        </>
    )
}

export default SingleCartProduct;