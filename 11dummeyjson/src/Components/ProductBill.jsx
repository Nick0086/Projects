import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function ProductBill() {
    const cartItems = useSelector((state) => state.cart.items);
    const [amount,setAmount] = useState(0)

    useEffect(() => {
        let amounts = 0;
        cartItems.map((item) => (
                amounts += parseInt(item.qty * (item.price - (item.price * (item.discountPercentage / 100))).toFixed(0))
        ))
        setAmount(amounts);
    },[cartItems])

    console.log(cartItems);
  return (
    <div>
        <p>Total :{amount} </p>
    </div>
  )
}

export default ProductBill;