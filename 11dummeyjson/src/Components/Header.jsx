import React from 'react'
import { Link } from 'react-router-dom'
import InputBox from './Input'
import { HiMagnifyingGlass } from "react-icons/hi2";
import Container from './Container';


function Header() {
    return (
        <header className='border-b-2 bg-slate-100'>
            <Container>
            <div className='flex justify-between py-5 items-center ' >
                <Link>
                    <img src={require('../Assets/logo.png')} alt="logo" />
                </Link>
                <div className='relative' >
                    <InputBox
                        placeholder="Serch Products..."
                        className="lg:py-3 lg:px-12 py-2 px-10 bg-slate-200 rounded-md lg:w-[500px] md:w-[400px] text-lg"
                    />
                    <HiMagnifyingGlass className='absolute top-1/2 left-3 -translate-y-1/2 lg:text-2xl md:text-xl' />
                </div>
            </div>
            </Container>
        </header>
    )
}

export default Header