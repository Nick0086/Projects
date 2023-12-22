import '../App.css';
import { FaGreaterThan } from "react-icons/fa";

import Header from "../components/Header"
import Statistics from "../components/Statistics"
import Testimonial from "../components/Testimonial"
import Footer from "../components/Footer"


const Aboutpage = () => {
    return (
        <>
            <Header/>
            <section className='bg-intro'>
                <div className='overlay'></div>
                <div className='container h-100'>
                    <div className='h-100 flex d-col justify-center alight-center'>
                        <p class="breadcrumbs">
                            <span><a href="#">Home</a><FaGreaterThan className='fa' /></span>
                            <span>About us</span>
                        </p>
                        <h1 className='bread'>About Us</h1>
                    </div>
                </div>
            </section>
            <section className='about-section p-128'>
                <div className='flex justify-end alight-center'>
                    <div className='width-50 section-info' >
                        <span className='subheading'>
                            ABOUT FURNISH
                        </span>
                        <h2>More than 20k Trusted Our Furniture Industry</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <div>
                            <a href="#" className='btn slider-btn btn-sec'>learn more</a>
                        </div>
                    </div>
                </div>
            </section>
            <Statistics/>
            <Testimonial/>
            <Footer/>
        </>
    )
}

export default Aboutpage