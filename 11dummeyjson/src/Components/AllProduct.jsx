import React from 'react'
import InputBox from './Input'
import { HiMagnifyingGlass } from "react-icons/hi2";
import ProductCard from './ProductCard';

function AllProduct({products}) {
  return (
    <div className='' >
      <h2 className='text-4xl text-[#D51243] font-semibold text-center my-6 mb-8' >Explore our Products</h2>
      <div className='relative w-2/3 mx-auto mb-8'>
        <InputBox
          placeholder="Serch Products..."
          className="lg:py-3 lg:px-12 py-2 px-10 bg-slate-200 rounded-md text-lg w-full"
        />
        <HiMagnifyingGlass className='absolute top-1/2 left-3 -translate-y-1/2 lg:text-2xl md:text-xl' />
      </div>
      <div className='grid grid-cols-3 gap-4 px-4'>
        {
          products && products.products.map((item) => <ProductCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default AllProduct;