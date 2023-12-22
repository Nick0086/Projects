import '../App.css';
import { FaArrowRight } from "react-icons/fa6";
import { FaMap , FaTelegramPlane} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

function Footer() {
    return (
        <footer className='bg-prime'>
            <div className='container p-80'>
                <div className='top-footer flex justify-between'>
                    <div className='single-footer'>
                        <a href="#" className='footerbrand footer-hed' >Furnish</a>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    </div>
                    <div className='single-footer txt-center'>
                        <h4 className='footer-hed' >Services</h4>
                        <ul className='footer-list'>
                            <li>
                                <a href="#"><FaArrowRight className='footer-icon' />Amazing Deals</a>
                            </li>
                            <li>
                                <a href="#"><FaArrowRight className='footer-icon' />Quality Furniture</a>
                            </li>
                            <li>
                                <a href="#"><FaArrowRight className='footer-icon' />Modern Design</a>
                            </li>
                            <li>
                                <a href="#"><FaArrowRight className='footer-icon' />Best Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className='single-footer'>
                        <h4 className='footer-hed' >Have a Questions?</h4>
                        <ul className='footer-list'>
                            <li>
                                <p className='footer-item' ><FaMap className='footer-icon footer-sec-icon' />203 Fake St. Mountain View, San Francisco, California, USA</p>
                            </li>
                            <li>
                                <a href="#" className=' footer-item'> <BsTelephoneFill className='footer-icon footer-sec-icon' /> +2 392 3929 210</a>
                            </li>
                            <li>
                                <a href="#" className=' footer-item'> <FaTelegramPlane className='footer-icon footer-sec-icon' /> info@yourdomain.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottem-footer txt-center bg-secondary ' >
                <p>Copyright ©2023 All rights reserved | This template is made with  by <a href="#" className='txt-secondary' >Colorlib</a></p>
            </div>
        </footer>
    )
}

export default Footer;