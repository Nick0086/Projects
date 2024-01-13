import React, { useState } from 'react'
import InputBox from './Input'
import { HiMagnifyingGlass } from "react-icons/hi2";
import ProductCard from './ProductCard';
import Button from './Button';
// import {  useParams } from 'react-router-dom';

function AllProduct({ products }) {

  const [serch, setserch] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    // if (serch !== "") {
    //   console.log("serch",serch)
    //   console.log("keyword",keyword)
    //   navigate(`/products/search?q=${keyword}`)
    //   setserch("");
    // }
  }

  return (
    <div className='' >
      <h2 className='md:text-4xl text-3xl text-[#D51243] font-semibold text-center my-6 mb-8' >Explore our Products</h2>
      <form className='relative w-2/3 mx-auto mb-8' onSubmit={submitHandler} >
        <InputBox
          placeholder="Serch Products..."
          className="lg:py-3 md:pr-24 pl-4 py-2 pr-14  bg-slate-200 rounded-md text-lg w-full"
          value={serch}
          onChange={(e) => setserch(e.target.value)}
        />
        <Button type='submit' className='absolute top-1/2 right-2 -translate-y-1/2 lg:text-2xl md:text-xl md:px-6 px-3'  >
          <HiMagnifyingGlass className='lg:text-2xl md:text-xl' />
        </Button>
      </form>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-4'>
        {
          products && products.products.map((item) => <ProductCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default AllProduct;