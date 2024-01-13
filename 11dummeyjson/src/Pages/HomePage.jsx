import React from 'react'
import SideBar from '../Components/SideBar'
import AllProduct from '../Components/AllProduct'
import Pagination from '../Components/Pagination'

function HomePage({ products,limit,setLimite,setCategory}) {

    return (
            <div className='grid grid-cols-12 gap-2 '>
                <div className='col-span-3 sticky top-0 h-screen'>
                    <SideBar setCategory={setCategory}/>
                </div>
                <div className='col-span-9' >
                    <AllProduct products={products} />
                    <Pagination limit={limit} productslimit={products} setLimite={setLimite} />
                </div>
            </div>
    )
}

export default HomePage