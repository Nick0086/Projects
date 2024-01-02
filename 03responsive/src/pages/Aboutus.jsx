import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaGreaterThan } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Testimonial from '../components/Testimonial';
import Statistics from '../components/Statistics'

function Aboutus() {
    return (
        <>
            <section className='bg-intro w-100 vh-100 position-relative z-0' >
                <div className='overlay position-absolute top-0 start-0 w-100 h-100 opacity-25'></div>
                <Container className='h-100' >
                    <div className=' d-flex justify-content-center align-items-center flex-column h-100'>
                        <p class="breadcrumbs d-flex align-items-center">
                            <span ><a href="#">Home</a><FaGreaterThan className='fa d-inline' /></span>
                            <span>About us</span>
                        </p>
                        <h1 className='bread'>About Us</h1>
                    </div>
                </Container>
            </section>
            <section className='about-section p-128 w-100'>
                <Container>
                    <Row className='justify-content-end'>
                        <Col md={6} >
                            <div className='section-info text-center text-md-start' >
                                <span className='subheading'>
                                    ABOUT FURNISH
                                </span>
                                <h2 className='mb-4'>Quality Makes the Belief for Customers</h2>
                                <p className='mb-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <div>
                                    <a href="#" className='btn slider-btn btn-sec'>learn more</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Statistics />
            <Testimonial />
        </>
    )
}

export default Aboutus;