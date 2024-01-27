import React from 'react'

function Button({
    type='button',
    className='',
    children,
    disabled,
    ...propes
}) {
  return (
    <button type={type} disabled={disabled}  className={`bg-[#D51243] p-2 px-6 rounded-lg text-white font-semibold duration-300 ${className}  ${disabled ? "bg-red-400" : "hover:bg-red-500"} `} {...propes} >{children}</button>
  )
}

export default Button