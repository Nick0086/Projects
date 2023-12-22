import '../App.css';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaUser, FaComment } from "react-icons/fa";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



function Blogs() {
    return (
        <Container className='p-128' >
            <div className='section-info text-center mb-5'>
                <span className='subheading'>OUR BLOG</span>
                <h2>Recent From Blog</h2>
            </div>
            <Row className='mb-5' >
                    <Col md={6} className='mb-4'>
                        <div className='bg-lights'>
                            <Row className='flex-column flex-lg-row'>
                                <Col className=''>
                                    <div className='blog-img overflow-hidden w-100'>
                                        <img src={require('../assets/image_1.jpg')} className='w-100 object-fit-cover h-100' alt="" />
                                    </div>
                                </Col>
                                <Col className=''>
                                    <div className='blog-info '>
                                        <p className='blog-heding '>
                                            <span><FaUser className='icon-blog' />admin</span>
                                            <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                            <span><FaComment className='icon-blog' />3 COMMENTS</span>
                                        </p>
                                        <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                                        <p  >A small river named Duden flows by their place.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='bg-lights'>
                            <Row className='flex-column flex-lg-row'>
                                <Col className=''>
                                    <div className='blog-img overflow-hidden w-100'>
                                        <img src={require('../assets/image_2.jpg')} className='w-100 object-fit-cover h-100' alt="" />
                                    </div>
                                </Col>
                                <Col className=''>
                                    <div className='blog-info '>
                                        <p className='blog-heding '>
                                            <span><FaUser className='icon-blog' />admin</span>
                                            <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                            <span><FaComment className='icon-blog' />3 COMMENTS</span>
                                        </p>
                                        <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                                        <p>A small river named Duden flows by their place.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='bg-lights'>
                            <Row className='flex-column flex-lg-row'>
                                <Col className=''>
                                    <div className='blog-info '>
                                        <p className='blog-heding '>
                                            <span><FaUser className='icon-blog' />admin</span>
                                            <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                            <span><FaComment className='icon-blog' />3 COMMENTS</span>
                                        </p>
                                        <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                                        <p>A small river named Duden flows by their place.</p>
                                    </div>
                                </Col>
                                <Col className=''>
                                    <div className='blog-img overflow-hidden w-100'>
                                        <img src={require('../assets/image_3.jpg')} className='w-100 object-fit-cover h-100' alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={6} className='mb-4'>
                        <div className='bg-lights'>
                            <Row className='flex-column flex-lg-row'>
                                
                                <Col className=''>
                                    <div className='blog-info '>
                                        <p className='blog-heding '>
                                            <span><FaUser className='icon-blog' />admin</span>
                                            <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                            <span><FaComment className='icon-blog' />3 COMMENTS</span>
                                        </p>
                                        <h4><a href="#">Shop the Look Cottage Country Living Room</a></h4>
                                        <p>A small river named Duden flows by their place.</p>
                                    </div>
                                </Col>
                                <Col className=''>
                                    <div className='blog-img overflow-hidden w-100'>
                                        <img src={require('../assets/image_4.jpg')} className='w-100 object-fit-cover h-100' alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
        </Container>
    )

}

export default Blogs;