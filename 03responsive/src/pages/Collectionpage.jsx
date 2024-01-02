import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaGreaterThan } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Paginations from '../components/Paginations';

function Colllectionpage() {
    return (
        <>
            <section className='bg-intro w-100 vh-100 position-relative z-0' >
                <div className='overlay position-absolute top-0 start-0 w-100 h-100 opacity-25'></div>
                <Container className='h-100' >
                    <div className=' d-flex justify-content-center align-items-center flex-column h-100'>
                        <p class="breadcrumbs d-flex align-items-center">
                            <span ><a href="#">Home</a><FaGreaterThan className='fa d-inline' /></span>
                            <span>Work</span>
                        </p>
                        <h1 className='bread text-center'>Our Collection</h1>
                    </div>
                </Container>
            </section>
            <Container fluid className='p-128' >
                <div className='section-info text-center mb-5'>
                    <span className='subheading'>OUR FINISH PROJECTS</span>
                    <h2>Furniture Collection</h2>
                </div>

                <Row className="px-2 mb-5" >
                    <Col md={3} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-1.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-2.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-3.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={5} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-4.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={3} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-5.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/gallery-6.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/image_1.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/image_2.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} className='mb-2 px-1'>
                        <div className='single-item'>
                            <img src={require('../assets/image_3.jpg')} className='w-100 h-100 object-fit-cover' alt="" />
                            <div className='img-wrapper d-flex align-items-end'>
                                <h3>Business Finance Consulting</h3>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Paginations />
            </Container>
        </>
    )
}

export default Colllectionpage;