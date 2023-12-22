import '../App.css';
import { FaGreaterThan } from "react-icons/fa";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Pagination from '../components/Pagination';


const Aboutpage = () => {
    return (
        <>
            <Header />
            <section className='bg-intro'>
                <div className='overlay'></div>
                <div className='container h-100'>
                    <div className='h-100 flex d-col justify-center alight-center'>
                        <p class="breadcrumbs">
                            <span><a href="#">Home</a><FaGreaterThan className='fa' /></span>
                            <span>WORK</span>
                        </p>
                        <h1 className='bread'>Our Collection</h1>
                    </div>
                </div>
            </section>
            <section className=' collection-sec full-colle'>
                <div className='section-info txt-center'>
                    <span className='subheading'>OUR FINISH PROJECTS</span>
                    <h2>Furniture Collection</h2>
                </div>
                <div className='collection-gallery'>
                    <div className='single-item item-1'>
                        <img src={require('../assets/gallery-1.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-1'>
                        <img src={require('../assets/gallery-2.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-2'>
                        <img src={require('../assets/gallery-3.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-3'>
                        <img src={require('../assets/gallery-4.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-1'>
                        <img src={require('../assets/gallery-5.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-4'>
                        <img src={require('../assets/gallery-6.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-4'>
                        <img src={require('../assets/image_1.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-4'>
                        <img src={require('../assets/image_2.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                    <div className='single-item item-4'>
                        <img src={require('../assets/image_3.jpg')} className='img' alt="" />
                        <div className='img-wrapper flex'>
                            <h3>Business Finance Consulting</h3>
                        </div>
                    </div>
                </div>
                <Pagination />
            </section>
            <Footer />
        </>
    )
}

export default Aboutpage