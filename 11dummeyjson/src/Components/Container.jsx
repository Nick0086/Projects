import React from 'react'

function Container({children}) {
  return (
    <div className='lg:w-[90%] md:w-[94%] w-[96%] mx-auto lg:px-4 md:px-2' >{children}</div>
  )
}

export default Container