import React, { useEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import AllProduct from '../Components/AllProduct'
import Pagination from '../Components/Pagination'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function HomePage() {

    const [products, setProducts] = useState(null);
    const [limit, setLimite] = useState(0);
    const [category, setCategorys] = useState();
    const [serch, setSerch] = useState();
    const [show, setShow] = useState(false)
    const { keyword, categoryname } = useParams();

    const SidebarHandler = (value) => {
        setShow(value)
    }

    // for chaange in category

    useEffect(() => {
        setLimite(0);
        console.log("categoryname", categoryname)
        setCategorys(categoryname)
    }, [categoryname])

    // useEEffect trigger when user serch product

    useEffect(() => {
        setLimite(0);
        console.log("keyword", keyword)
        setSerch(keyword)
    }, [keyword])

    useEffect(() => {
        let url = `https://dummyjson.com/products?skip=${limit}&limit=30`
        if (category) {
            url = `https://dummyjson.com/products/category/${category}?skip=${limit}&limit=30`;
        }
        if (serch) {
            url = `https://dummyjson.com/products/search?q=${serch} `
        }
        axios.get(`${url}`)
            .then((res) => setProducts(res.data))
            .catch(error => console.log("error in fetch products : ", error));
    }, [limit, category,serch])

    console.log(products,)

    return (
        <>
            {
                products ?
                    <div className='grid grid-cols-12 gap-2 relative '>
                        <div className={`md:col-span-3 md:sticky top-0 h-screen z-40 fixed left-0 md:translate-x-0 md:w-auto w-[250px] duration-500 ease-in-out ${show ? "" : "-translate-x-full"} `}>
                            <SideBar SidebarHandler={SidebarHandler} setLimite={setLimite} />
                        </div>
                        <div className='md:col-span-9 col-span-12' >
                            <AllProduct products={products} SidebarHandler={SidebarHandler} />
                            <Pagination limit={limit} productslimit={products} setLimite={setLimite} />
                        </div>
                    </div> :
                    <h1>Loding</h1>
            }
        </>

    )
}

export default HomePage