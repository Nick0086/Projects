import React, { useState } from 'react'
import Button from './Button';
import { useDispatch } from 'react-redux';
import { removetoCart, updateCartQuantity } from '../Slice/CartSlice';
import { IoIosCloseCircle } from "react-icons/io";


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
            <div className='md:col-span-2 col-span-6 md:row-span-0 row-span-5 md:flex justify-center items-center'>
                <img src={`${item.thumbnail}`} alt={item.title} className='aspect-video rounded-lg' />
            </div>
            <div className='md:col-span-3 col-span-6 md:flex justify-center flex-col' >
                <div className='md:w-[80%] mx-auto' >
                    <h2 className='lg:text-lg md:text-base text-lg font-medium mb-1 tracking-tight md:me-0 me-8' >{item.title}</h2>
                    <p className='text-sm tracking-tight' >{item.brand}</p>
                </div>
            </div>
            <div className='md:col-span-3 col-span-6 flex md:justify-center items-center'>
                <span className='md:hidden capitalize me-3 font-bold' >quantity :</span>
                <Button className='p-[0px] px-[0px] h-6 w-6 text-sm me-1 flex justify-center items-center bg-slate-400' disabled={qty <= 1} onClick={() => handleQtyChange(qty - 1)} >-</Button>
                <p className='w-5 text-center' >{qty}</p>
                <Button className='p-[0px] px-[0px] h-6 w-6 text-sm ms-1 flex justify-center items-center bg-slate-400' disabled={qty >= 10} onClick={() => handleQtyChange(qty + 1)} >+</Button>
            </div>
            <div className='md:col-span-1 col-span-6  flex md:justify-center items-center'>
            <span className='md:hidden capitalize me-3 font-bold' >price :</span>
                <p className='tracking-tight' >
                    ₹{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}
                </p>
            </div>
            <div className='md:col-span-2 col-span-6 flex md:justify-center items-center'>
            <span className='md:hidden capitalize me-3 font-bold' >total :</span>
                <p className='tracking-tight font-medium'>
                    ₹{qty * (item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}
                </p>
            </div>
            <div className='md:col-span-1 col-span-6  md:flex justify-center items-center md:static absolute top-[2%] right-[1%] '>
                <Button className='lg:px-1 lg:py-1 md:px-1 md:py-1 p-[4px]  text-xl ' onClick={() => dispatch(removetoCart(item.id))} ><IoIosCloseCircle /></Button>
            </div>
        </>
    )
}

export default SingleCartProduct;