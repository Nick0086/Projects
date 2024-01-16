import React, { useState } from 'react'
import Button from './Button';
import InputBox from './Input'
import { HiMagnifyingGlass } from "react-icons/hi2";
// import {  useParams } from 'react-router-dom';

function SerchBar() {

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
        <form className='relative md:w-2/3 w-[96%]  mx-auto md:mb-8' onSubmit={submitHandler} >
            <InputBox
                placeholder="Serch Products..."
                className="lg:py-3 md:pr-24 pl-4 py-2 pr-20  bg-slate-200 rounded-md text-lg w-full"
                value={serch}
                onChange={(e) => setserch(e.target.value)}
            />
            <Button type='submit' className='absolute top-1/2 right-2 -translate-y-1/2 lg:text-2xl md:text-xl md:px-2 px-[8px]'  >
                <HiMagnifyingGlass className='lg:text-2xl md:text-xl' />
            </Button>
        </form>
    )
}

export default SerchBar