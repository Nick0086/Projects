import React from 'react'
import SideBar from '../Components/SideBar'
import AllProduct from '../Components/AllProduct'
import Pagination from '../Components/Pagination'

function HomePage({ products,limit,setLimite,setCategory}) {
    
    return (
            <div className='grid grid-cols-12 gap-2 relative '>
                <div className='md:col-span-3 md:sticky top-0 h-screen z-40 fixed '>
                    <SideBar setCategory={setCategory}/>
                </div>
                <div className='md:col-span-9 col-span-12' >
                    <AllProduct products={products}   />
                    <Pagination limit={limit} productslimit={products} setLimite={setLimite} />
                </div>
            </div>
    )
}

export default HomePage