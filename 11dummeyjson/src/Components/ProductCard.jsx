import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa6";
import Button from './Button';


function ProductCard({ item }) {


    return (
        <Link to={`/productdetail/${item.id}`}>
            <div className='bg-slate-100 h-full p-4 rounded-lg'>
                <div className='rounded-md overflow-hidden' >
                    <img src={item.thumbnail} className='aspect-square' alt="thumbnail" />
                </div>
                <div className='mt-4'>
                    <div className='flex justify-between items-center' >
                        <span className='text-sm bg-[#D51243] inline-block text-white p-1 px-2 mb-2 rounded-md'>{item.brand}</span>
                        <div className={`text-sm flex items-center text-white p-1 px-2 mb-2 rounded-md ${item.rating >= 4 ? "bg-green-600" : item.rating >= 3 ? "bg-yellow-400" : "bg-red-500"}`}>
                            {item.rating}<FaRegStar className='ms-1' />
                        </div>

                    </div>
                    <h4 className='capitalize text-lg text-gray-700 font-medium hover:text-[#D51243] duration-300' >{item.title}</h4>
                    <p className='text-xl font-semibold'>
                        ₹{(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                        <span className='line-through text-gray-400 opacity-75 ms-4' >₹{item.price}</span>
                    </p>
                    <div className='mt-4' >
                        <Button>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard