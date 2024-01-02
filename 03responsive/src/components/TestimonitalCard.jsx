import React from 'react'

function TestimonitalCard({reviwe,Image,name,position}) {
    return (
        <div className='mb-3 mb-lg-0' >
            <div className='bg-white rounded-2 p-4' >
                <p className='mb-3'>{reviwe}</p>
                <div className='client-info d-flex align-items-center'>
                    <div className='client-pic'>
                        <img src={Image} className='rounded-circle me-3 overflow-hidden' alt="" />
                    </div>
                    <div className='client-detail'>
                        <h4 className='mb-1' >{name}</h4>
                        <p className='mb-0' >{position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonitalCard;