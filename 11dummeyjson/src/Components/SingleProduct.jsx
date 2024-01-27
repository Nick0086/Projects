import React, { useState } from 'react'
import { FaRegStar, FaRegHeart } from "react-icons/fa6";
import Button from './Button'
import ImageMagnifier from './ImageMagnifier/ImageMagnifier';
import Zoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'



function SingleProduct({ item }) {

    console.log("singleProduct", item)
    const [qty, setQty] = useState(0)
    const [thumbnail, setThumbnail] = useState(item.thumbnail)



    return (
        <div className='w-[90%] mx-auto grid grid-cols-12 gap-10 bg-white p-6 rounded-2xl' >
            <div className='col-span-6'>
                <div className='w-full mb-4 relative'>
                    <Zoom overlayBgColorEnd="rgba(255,255,255,0.95)">
                        <img src={thumbnail} className='w-full aspect-[16/9]' alt="" />
                    </Zoom>
                    {/* <img src={thumbnail} className='w-full aspect-[16/9] ' alt="" /> */}
                    {/* <ImageMagnifier src={thumbnail} alt="" /> */}
                </div>


                <ul className={`grid grid-cols-10 justif-between gap-x-3 `} >
                    {
                        item.images.map((item) => (
                            <li className='col-span-2 border border-black' >
                                <img src={item} alt="" className='h-full cursor-pointer aspect-square' onClick={() => setThumbnail(item)} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='col-span-6'>
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
                        <Button className='p-[0px] px-[0px] h-7 w-7 me-2 flex justify-center items-center bg-slate-400' onClick={() => qty >= 0 ? setQty(qty - 1) : ""} >-</Button>
                        <p className='w-5 text-center' >{qty + 1}</p>
                        <Button className='p-[0px] px-[0px] h-7 w-7 ms-2 flex justify-center items-center bg-slate-400' onClick={() => setQty(qty + 1)} >+</Button>
                    </div>
                </div>
                <div className='flex items-center w-[45%] justify-between' >
                    <Button className='py-3' >Add to Cart</Button>
                    <Button className='p-[0px] px-[0px] w-12 h-12 flex justify-center items-center'><FaRegHeart /></Button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct