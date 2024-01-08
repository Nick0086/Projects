import React, { useId } from 'react'

function Input({ label, type = "text", name, value = "", changeHandler, ...propes }) {

    let id = useId();

    return (
        <div className='input-group'>
            <label htmlFor={id} className='form-label' >{label}</label>
            <input type={type} name={name} id={id} className='form-input' {...propes} onChange={changeHandler} value={value} required></input>
        </div>
    )
}

export default Input