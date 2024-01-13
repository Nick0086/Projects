import React, { useId } from 'react'

function InputBox({label,type="text",className,value,placeholder,...propes}) {

    const id = useId();

  return (
    <div>
        {
            label && <label htmlFor={id}>{label}</label>
        }
        <input id={id} type={type} {...propes} placeholder={placeholder} className={`outline-none ${className}`} value={value}/>
    </div>
  )
}

export default InputBox;