import React, { useEffect, useState } from 'react'
import { FaRegStar, FaRegHeart } from "react-icons/fa6";
import Button from './Button'
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removetoCart } from '../Slice/CartSlice';



function SingleProduct({ item }) {

    const [qty, setQty] = useState(1);
    const [thumbnail, setThumbnail] = useState(item.thumbnail);
    const [itemAdd, setItemAdd] = useState(false);
    const cartItem = useSelector((state) => state.cart.items);
    const dispatch = useDispatch()

    const addtoCartHandler = () => {
        if (itemAdd) {
            dispatch(removetoCart(item.id))
            setItemAdd(false)
        } else {
            const newItem = { ...item, qty: qty };
            dispatch(addtoCart(newItem))
            setItemAdd(true)
        }
    }

    // useEffect use to check is produc is already in cart or not on product load
    useEffect(() => {
        if (cartItem) {
            const isItemInCart = cartItem.filter((items) => items.id === item.id);
            if (isItemInCart.length !== 0) {
                setItemAdd(true)
                setQty(isItemInCart[0].qty)
            } else {
                setItemAdd(false)
            }
        }
    },[])

    return (
        <div className='md:w-[90%] w-[98%] md:my-0 my-3 mx-auto grid grid-cols-12 md:gap-10 gap-y-3 bg-white md:p-6 p-3 rounded-2xl shadow-lg' >
            <div className='md:col-span-6 col-span-12'>
                <div className='w-full mb-4 relative'>
                    <Zoom overlayBgColorEnd="rgba(255,255,255,0.95)">
                        <img src={thumbnail} className='md:w-full  lg:aspect-[14/9] md:aspect-[16/16] rounded-lg ' alt="" />
                    </Zoom>
                    {/* <img src={thumbnail} className='w-full aspect-[16/9] ' alt="" /> */}
                    {/* <ImageMagnifier src={thumbnail} alt="" /> */}
                </div>
                <ul className={`grid grid-cols-10 justif-between md:gap-x-3 gap-x-1 `} >
                    {
                        item.images.map((item) => (
                            <li key={item} className='col-span-2 border border-black rounded-md overflow-hidden' >
                                <img src={item} alt="" className='h-full cursor-pointer aspect-square  ' onClick={() => setThumbnail(item)} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='md:col-span-6 col-span-12'>
                <h2 className='text-2xl font-bold mb-4' >{item.title}</h2>
                <div className={`text-xs inline-flex items-center text-white p-1 px-2 mb-4 rounded-md ${item.rating >= 4 ? "bg-green-600" : item.rating >= 3 ? "bg-yellow-400" : "bg-red-500"}`}>
                    {item.rating}<FaRegStar className='ms-1' />
                </div>
                <p className='text-xl font-semibold mb-4'>
                    ₹{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(0)}

                    <span className='line-through text-gray-400 opacity-75 ms-4' >₹{item.price}</span>
                </p>
                <p className='px-4 py-1 bg-green-500 inline-block rounded-lg text-white font-bold mb-4' >{item.stock > 0 ? "In stock" : "out of stock"}</p>
                <p className='text-gray-800 font-medium mb-4' >{item.description}</p>
                <div className='flex items-center mb-4' >
                    <p className='font-extrabold text-lg' >Qty :</p>
                    <div className='flex items-center ms-4' >
                        <Button className='p-[0px] px-[0px] h-7 w-7 me-2 flex justify-center items-center bg-slate-400' disabled={qty <= 1} onClick={() =>  setQty(qty - 1)} >-</Button>
                        <p className='w-5 text-center' >{qty}</p>
                        <Button className='p-[0px] px-[0px] h-7 w-7 ms-2 flex justify-center items-center bg-slate-400' disabled={qty >= 10}  onClick={() => setQty(qty + 1)} >+</Button>
                    </div>
                </div>
                <div className='flex items-center lg:w-[50%] md:w-[70%]  justify-between' >
                    <Button className='px-3' onClick={addtoCartHandler} >
                        {
                            itemAdd ? "Remove to Cart" : "Add to Cart"
                        }
                    </Button>
                    <Button className=' w-10 h-10 flex justify-center items-center'><FaRegHeart/></Button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct