import React from 'react'
import ProductCard from './ProductCard';
import SerchBar from './SerchBar';
import { FaBars } from "react-icons/fa6";
import Button from './Button';



function AllProduct({ products ,SidebarHandler,serchHandler}) {

  return (
    <div className='' >
      <h2 className='md:text-4xl text-3xl text-[#D51243] font-semibold text-center my-6 mb-8' >Explore our Products</h2>
        <div className='md:block grid md:grid-cols-1 grid-cols-12 items-center justify-items-center px-4 md:mb-0 mb-6 gap-1 ' >
          <div className='md:col-span-1 col-span-10' >
            <SerchBar serchHandler={serchHandler} />
          </div>
          <div className='md:hidden col-span-2 ' >
            <Button className='px-[10px] py-[10px]' onClick={ () =>  SidebarHandler(true)} >
            <FaBars />
            </Button>
          </div>
        </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4'>
        {
          products && products.products.map((item) => <ProductCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default AllProduct;