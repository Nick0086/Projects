import React, { useState } from 'react'
import { FaRegStar, FaRegHeart } from "react-icons/fa6";
import Button from './Button'

function SingleProduct() {
    const [qty, setQty] = useState(0)
    const [thumbnail,setThumbnail] = useState("https://cdn.dummyjson.com/product-images/1/thumbnail.jpg")

    const sizeArray = ["XS", "s", "m", "l", "xl"]

    return (
        <div className='grid grid-cols-12 gap-10 min-h-screen justify-center content-center' >
            <div className='col-span-6'>
                <div className='w-full mb-4'> 
                    <img src={thumbnail} className='w-full' alt="" />
                </div>
                <ul className='grid grid-cols-10 justify-content-between gap-x-2 ' >
                    <li className='col-span-2' >
                        <img src={'https://cdn.dummyjson.com/product-images/1/1.jpg'} alt="" className='h-full cursor-pointer' srcset="" />
                    </li>
                    <li className='col-span-2' >
                        <img src={'https://cdn.dummyjson.com/product-images/1/2.jpg'} alt="" className='h-full cursor-pointer' srcset="" />
                    </li>
                    <li className='col-span-2' >
                        <img src={'https://cdn.dummyjson.com/product-images/1/3.jpg'} alt="" className='h-full cursor-pointer' srcset="" />
                    </li>
                    <li className='col-span-2' >
                        <img src={'https://cdn.dummyjson.com/product-images/1/4.jpg'} alt="" className='h-full cursor-pointer' srcset="" />
                    </li>
                    <li className='col-span-2' >
                        <img src={'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'} alt=""className='h-full cursor-pointer'  srcset="" />
                    </li>
                </ul>
            </div>
            <div className='col-span-6'>
                <h2 className='text-2xl font-bold mb-4' >iPhone 9</h2>
                <div className={`text-xs inline-flex items-center text-white p-1 px-2 mb-4 rounded-md ${true >= 4 ? "bg-green-600" : true >= 3 ? "bg-yellow-400" : "bg-red-500"}`}>
                    5<FaRegStar className='ms-1' />
                </div>
                <p className='text-xl font-semibold mb-4'>
                    ₹500
                    {/* ₹{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)} */}
                    <span className='line-through text-gray-400 opacity-75 ms-4' >₹500</span>
                </p>
                <p className='px-4 py-1 bg-green-500 inline-block rounded-lg text-white font-bold mb-4' >In stock</p>
                <p className='text-gray-800 font-medium mb-4' >An apple mobile which is nothing like apple</p>
                <div className='flex items-center mb-4' >
                    <p className='font-extrabold text-lg' >Size :</p>
                    <ul className='flex ms-2' >
                        {
                            sizeArray.map((size, index) => (
                                <li className='capitalize mx-2 flex justify-center items-center cursor-pointer border h-10 w-10 rounded-full duration-500 hover:border-black ' key={index} >{size}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex items-center mb-4' >
                    <p className='font-extrabold text-lg' >Qty :</p>
                    <div className='flex items-center ms-4' >
                        <Button className='p-0 px-0 h-7 w-7 me-2 flex justify-center items-center bg-slate-400' onClick={() => setQty(qty - 1)} >-</Button>
                        <p className='w-5 text-center' >{qty + 1}</p>
                        <Button className='p-0 px-0 h-7 w-7 ms-2 flex justify-center items-center bg-slate-400' onClick={() => setQty(qty + 1)} >+</Button>
                    </div>
                </div>
                <div className='flex items-center w-[35%] justify-between' >
                    <Button className='py-3' >Add to Cart</Button>
                    <Button className='p-0 px-0 w-12 h-12 flex justify-center items-center'><FaRegHeart /></Button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct