import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaUser, FaComment, FaGreaterThan } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Paginations from '../components/Paginations';
import { allBlogdata } from '../data/blog';

function Blogpage() {

    const data = allBlogdata;

    return (
        <>
            <section className='bg-intro w-100 vh-100 position-relative z-0' >
                <div className='overlay position-absolute top-0 start-0 w-100 h-100 opacity-25'></div>
                <Container className='h-100' >
                    <div className=' d-flex justify-content-center align-items-center flex-column h-100'>
                        <p class="breadcrumbs d-flex align-items-center">
                            <span ><a href="#">Home</a><FaGreaterThan className='fa d-inline' /></span>
                            <span>BLOG</span>
                        </p>
                        <h1 className='bread text-center'>Our Blog</h1>
                    </div>
                </Container>
            </section>
            <Container fluid className='p-128' >
                <div className='section-info text-center mb-5'>
                    <span className='subheading'>OUR BLOG</span>
                    <h2>Recent From Blog</h2>
                </div>

                <Row className='mb-5'>
                    {
                        data.map((data) => (
                            <Col md={6} className='mb-4'>
                                <div className='bg-lights'>
                                    <Row className='flex-column flex-lg-row'>

                                        <Col className="" xs={{ order: 0 }} lg={data.imageposition === "left" ? { order: 0 } : { order: 1 }} >
                                            <div className='blog-img overflow-hidden w-100'>
                                                <img src={data.img} className='w-100 object-fit-cover h-100' alt="" />
                                            </div>
                                        </Col>

                                        <Col className='' xs={{ order: 1 }} lg={data.imageposition === "left" ? { order: 1 } : { order: 0 }} >
                                            <div className='blog-info '>
                                                <p className='blog-heding '>
                                                    <span><FaUser className='icon-blog' />admin</span>
                                                    <span><FaRegCalendarDays className='icon-blog' />JAN. 27, 2021</span>
                                                    <span><FaComment className='icon-blog' />3 COMMENTS</span>
                                                </p>
                                                <h4><a href="#">{data.title}</a></h4>
                                                <p  >{data.content}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        ))
                    }
                </Row>

                <Paginations />
            </Container>
        </>
    )
}

export default Blogpage;