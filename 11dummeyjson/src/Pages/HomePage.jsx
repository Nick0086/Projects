import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import AllProduct from '../Components/AllProduct'
import Pagination from '../Components/Pagination'

function HomePage({ products, limit, setLimite, setCategory }) {

    const [show , setShow] = useState(false)

    const SidebarHandler = () => {
        setShow(!show)
    }

    return (
        <div className='grid grid-cols-12 gap-2 relative '>
            <div className={`md:col-span-3 md:sticky top-0 h-screen z-40 min-w-[250px] fixed left-0 md:translate-x-0 duration-500 ease-in-out ${show ? "" : "-translate-x-full"} `}>
                <SideBar setCategory={setCategory} SidebarHandler={SidebarHandler} />
            </div>
            <div className='md:col-span-9 col-span-12' >
                <AllProduct products={products} SidebarHandler={SidebarHandler} />
                <Pagination limit={limit} productslimit={products} setLimite={setLimite} />
            </div>
        </div>
    )
}

export default HomePage