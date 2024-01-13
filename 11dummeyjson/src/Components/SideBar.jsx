import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function SideBar({setCategory}) {

    const [categories, setCategories] = useState(null)
    const { category } = useParams();
    
    useEffect(() => {
        setCategory(category);
    }, [category])

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => setCategories(res.data))
            .catch((error) => console.error("error in categories fetch", error))
    }, [])


    return (
        <div className=' h-screen overflow-y-scroll'>
            <h2 className='text-xl text-white font-semibold p-2 px-4 bg-[#D51243]' >Categories</h2>
            <ul className='bg-slate-100' >
                <li className="text-lg capitalize px-4 py-2 font-medium hover:text-[#D51243] duration-300 cursor-pointer">
                    <Link to='/'>
                        All Products
                    </Link>
                </li>

                {
                    categories && categories.map((data) => (
                        <li key={data} className="text-lg capitalize px-4 py-2 font-medium hover:text-[#D51243] duration-300">
                            <Link to={`/products/category/${data}`}>
                                {data}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar