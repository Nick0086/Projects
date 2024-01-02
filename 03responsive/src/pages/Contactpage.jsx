import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaGreaterThan } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaSquareFacebook  , FaSquareInstagram , FaSquareDribbble} from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";


function Contact() {
    return (
        <>
            <section className='bg-intro w-100 vh-100 position-relative z-0' >
                <div className='overlay position-absolute top-0 start-0 w-100 h-100 opacity-25'></div>
                <Container className='h-100' >
                    <div className=' d-flex justify-content-center align-items-center flex-column h-100'>
                        <p class="breadcrumbs d-flex align-items-center">
                            <span ><a href="#">Home</a><FaGreaterThan className='fa d-inline' /></span>
                            <span>CONTACT</span>
                        </p>
                        <h1 className='bread'>Contact us</h1>
                    </div>
                </Container>
            </section>
            <div className='bg-lights' >
                <Container className='p-128'>
                    <Row className='justify-content-center'>
                        <Col lg={10}>
                            <div className='bg-white p-md-5 p-4'>
                                <div className='contact-head'>
                                    <h3>Contact us</h3>
                                    <p>We're open for any suggestion or just to have a chat</p>
                                </div>
                                <Row className='mb-4'>
                                    <Col md={4}>
                                        <div className='dbox'>
                                            <p>
                                                <span>ADDRESS:</span>198 West 21th Street, Suite 721 New York NY 10016
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='dbox'>
                                            <p>
                                                <span>EMAIL:</span>
                                                <a href="#">info@yoursite.com</a>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='dbox'>
                                            <p>
                                                <span>PHONE:</span>
                                                <a href="#">+ 1235 2355 98</a>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Form>
                                    <Row>
                                        <Col lg={4} className='mb-3'>
                                            <Form.Control type='text' placeholder="Name" required />
                                        </Col>
                                        <Col lg={4} md={8}  className='mb-3'>
                                            <Form.Control type="email" placeholder="Email" required />
                                        </Col>
                                        <Col lg={4} md={4}  className='mb-3'>
                                            <Form.Control type='text' placeholder="Subject" required />
                                        </Col>
                                        <Col className='mb-3'>
                                            <Form.Control style={{maxHeight:'144px',minHeight:'144px'}} as="textarea" placeholder="Create a message here" />
                                        </Col>
                                        <div>
                                            <Button className='btn sub-btn border-0 py-3 px-4' type="submit">Submit form</Button>
                                        </div>
                                    </Row>
                                </Form>
                                <div className='mt-5'>
                                    <h4 className='mb-2'>Follow us here</h4>
                                    <ul className='social-link ps-0'>
                                        <li className=''>
                                            <a href="#"><FaSquareFacebook /></a>
                                        </li>
                                        <li><a href="#"><FaSquareTwitter /></a></li>
                                        <li><a href="#"><FaSquareInstagram /></a></li>
                                        <li><a href="#"><FaSquareDribbble /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;