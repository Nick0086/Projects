import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoIosCloseCircle } from "react-icons/io";
import Button from './Button';


function SideBar({SidebarHandler,setLimite}) {

    const [categories, setCategories] = useState(null)

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => setCategories(res.data))
            .catch((error) => console.error("error in categories fetch", error))
    }, [])


    return (
        <div className=' h-screen overflow-y-scroll'>
            <div className='md:block flex items-center justify-between text-xl text-white font-semibold p-2 px-4 bg-[#D51243]' >
                <h2 className='' >Categories  </h2>
                <Button className='md:hidden p-[4px] px-[4px] border border-transparent focus:border-black hover:bg-transparent' onClick={ () =>  SidebarHandler(false)} >
                    <IoIosCloseCircle className=' text-2xl' />
                </Button>
            </div>
            <ul className='bg-slate-100' >
                <li className="text-lg capitalize px-4 py-2 font-medium hover:text-[#D51243] duration-300 cursor-pointer">
                    <Link to='/' onClick={ () =>  setLimite(0)} >
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