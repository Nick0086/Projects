import '../App.css';
import { FaGreaterThan } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaUser, FaComment} from "react-icons/fa";

import Header from "../components/Header"
import Footer from "../components/Footer"
import Pagination from '../components/Pagination';


const Blogpage = () => {
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
                        <h1 className='bread'>Our Blog</h1>
                    </div>
                </div>
            </section>
            <section className='p-128 container'>
                <div className='section-info txt-center'>
                    <span className='subheading'>OUR BLOG </span>
                    <h2>Recent From Blog</h2>
                </div>
                <div className='blog-warraper flex justify-between'>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-img'>
                            <img src={require('../assets/image_1.jpg')} className='img' alt="" />
                        </div>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                    </div>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-img'>
                            <img src={require('../assets/image_2.jpg')} className='img' alt="" />
                        </div>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                    </div>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                        <div className='blog-img'>
                            <img src={require('../assets/image_3.jpg')} className='img' alt="" />
                        </div>
                    </div>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                        <div className='blog-img'>
                            <img src={require('../assets/image_4.jpg')} className='img' alt="" />
                        </div>
                    </div>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-img'>
                            <img src={require('../assets/image_1.jpg')} className='img' alt="" />
                        </div>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                    </div>
                    <div className='single-blog bg-light flex justify-between'>
                        <div className='blog-img'>
                            <img src={require('../assets/image_2.jpg')} className='img' alt="" />
                        </div>
                        <div className='blog-info'>
                            <p className='blog-heding '>
                                <span><FaUser className='icon-blog' />admin</span>
                                <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                <span><FaComment className='icon-blog' />3 COMMENTS</span>
                            </p>
                            <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                            <p>A small river named Duden flows by their place.</p>
                        </div>
                    </div>
                </div>
                <Pagination />
            </section>
            <Footer />
        </>
    )
}

export default Blogpage