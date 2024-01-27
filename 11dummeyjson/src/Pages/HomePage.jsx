import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import AllProduct from '../Components/AllProduct'
import Pagination from '../Components/Pagination'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function HomePage() {

    const [products, setProducts] = useState(null);
    const [limit, setLimite] = useState(0);
    const [show, setShow] = useState(false)
    const { categoryname } = useParams();

    const SidebarHandler = (value) => {
        setShow(value)
    }

    const serchHandler = (keywords) => {
        axios.get(`https://dummyjson.com/products/search?q=${keywords}`)
            .then((res) => setProducts(res.data))
            .catch(error => console.log("error in fetch products : ", error));
    }

    useEffect(() => {
        let url = `https://dummyjson.com/products?skip=${limit}&limit=30`
        if (categoryname) {
            setLimite(0)
            url = `https://dummyjson.com/products/category/${categoryname}?skip=${limit}&limit=30`;
        }
        axios.get(`${url}`)
            .then((res) => setProducts(res.data))
            .catch(error => console.log("error in fetch products : ", error));
    }, [limit, categoryname])

    return (
        <>
            {
                products ?
                    <div className='grid grid-cols-12 gap-2 relative '>
                        <div className={`md:col-span-3 md:sticky top-0 h-screen z-40 fixed left-0 md:translate-x-0 md:w-auto w-[250px] duration-500 ease-in-out ${show ? "" : "-translate-x-full"} `}>
                            <SideBar SidebarHandler={SidebarHandler} setLimite={setLimite} />
                        </div>
                        <div className='md:col-span-9 col-span-12' >
                            <AllProduct products={products} SidebarHandler={SidebarHandler} serchHandler={serchHandler} />
                            <Pagination limit={limit} productslimit={products} setLimite={setLimite} />
                        </div>
                    </div> :
                    <h1>Loding</h1>
            }
        </>

    )
}

export default HomePage