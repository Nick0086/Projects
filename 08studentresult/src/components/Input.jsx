import React, { useId, useRef ,useEffect } from 'react'

function Input({ label, type = "text", name, value = "", changeHandler }) {

    const id = useId();
    const inputRef = useRef();
    console.log(`${label} = id = ${id}`);

    return (
        <div className='input-group'>
            <label htmlFor={id} className='form-label' >{label} :</label>
            <input type={type} name={name} ref={inputRef} id={id} className='form-input' onChange={changeHandler} value={value} required></input>
        </div>
    )
}

export default Input