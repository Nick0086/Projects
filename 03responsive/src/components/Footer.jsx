import '../App.css';
import { FaArrowRight } from "react-icons/fa6";
import { FaMap, FaTelegramPlane } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

function Footer() {
    return (
        <footer className='bg-prime'>
            <Container className='p-80' >
                <Row className='justify-content-between'>
                    <Col lg={3} md={4} >
                        <div className='single-footer'>
                            <a href="#" className='footerbrand mb-3 mb-md-4 mb-lg-5' >Furnish</a>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                    </Col>
                    <Col lg={3} md={4} >
                        <div className='single-footer'>
                            <h4 className='footer-hed mb-3 mb-md-4 mb-lg-5' >Services</h4>
                            <ul className='footer-list ps-0'>
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
                    </Col>
                    <Col lg={3} md={4} >
                        <div className='single-footer'>
                            <h4 className='footer-hed mb-3 mb-md-4 mb-lg-5' >Have a Questions?</h4>
                            <ul className='footer-list footer-sec ps-0'>
                                <li>
                                <a href="#" className='footer-item'> <FaMap className='footer-icon footer-sec-icon w-auto' />203 Fake St. Mountain View, San Francisco, California, USA</a>
                                </li>
                                <li>
                                    <a href="#" className='footer-item'> <BsTelephoneFill className='footer-icon footer-sec-icon' /> +2 392 3929 210</a>
                                </li>
                                <li>
                                    <a href="#" className='footer-item'> <FaTelegramPlane className='footer-icon footer-sec-icon' /> info@yourdomain.com</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='bottem-footer text-center bg-secondar py-5 ' >
                <p className='mb-0'  >Copyright ©2023 All rights reserved | This template is made with  by <a href="#" className='txt-secondar' >Colorlib</a></p>
            </div>
        </footer>
    )
}

export default Footer;