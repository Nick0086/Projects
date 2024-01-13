import React from 'react'
import Button from './Button'

function Pagination({limit,setLimite,productslimit}) {
  return (
    <div className='my-5 flex justify-center' >
        <Button className='mx-2' onClick={() => setLimite(limit - 30)} disabled={limit === 0 ? true : false} >Prev</Button>
        <Button className='mx-2' onClick={() => setLimite(limit + 30)} disabled={(limit + 30) >= productslimit.total  ? true : false} >Next</Button>
    </div>
  )
}

export default Pagination