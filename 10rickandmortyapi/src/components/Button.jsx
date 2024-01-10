import React from 'react'
import Button from 'react-bootstrap/Button';


function Buttons({children,type="button",classname="",...propes}) {
  return (
    <Button type={type}  className={` bg-blue ${classname}`} {...propes} variant="dark">{children}</Button>
  )
}

export default Buttons;