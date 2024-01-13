import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaCartShopping } from "react-icons/fa6";

import Container from './Container';


function Header() {
    return (
        <header className='border-b-2 bg-slate-100'>
            <Container>
                <div className='flex justify-between py-5 items-center ' >
                    <Link>
                        <img src={require('../Assets/logo.png')} alt="logo" />
                    </Link>
                    <ul className='flex text-xl' >
                        <li className='ms-5'>
                            <Link><FaRegHeart /></Link>
                        </li>
                        <li className='ms-5'>
                            <Link><FaCartShopping /></Link>
                        </li>
                    </ul>
                    
                </div>
            </Container>
        </header>
    )
}

export default Header