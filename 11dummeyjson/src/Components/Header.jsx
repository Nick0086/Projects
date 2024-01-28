import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";
import Container from './Container';
import { useSelector } from 'react-redux';

function Header() {

    const cartItems = useSelector((state) => state.cart.items);

    return (
        <header className='border-b-2 bg-slate-100'>
            <Container>
                <div className='flex justify-between py-5 items-center ' >
                    <Link to="/ ">
                        <img src={require('../Assets/logo.png')} alt="logo" />
                    </Link>
                    <ul className='flex text-2xl' >
                        <li className='ms-5'>
                            <Link><FaRegHeart /></Link>
                        </li>
                        <li className='ms-5'>
                            <Link className='relative' to='/cart' ><FaCartShopping />
                                {
                                    cartItems.length > 0 && <span className='absolute text-xs font-medium text-white flex justify-center items-center rounded-full -top-[40%] md:-right-[40%] -right-[15%] bg-red-600 h-[20px] w-[20px] ' >{cartItems.length}</span>
                                }
                            </Link>
                        </li>
                    </ul>

                </div>
            </Container>
        </header>
    )
}

export default Header