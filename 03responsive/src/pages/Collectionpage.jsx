import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaGreaterThan } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Paginations from '../components/Paginations';

function Colllectionpage({fullcollectionDatat}) {
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
                    {
                        fullcollectionDatat.map((collection, index) => (
                            <Col md={collection.md} sm={12} className='mb-2 px-1' key={index}>
                                <div className='single-item'>
                                    <img src={collection.scr} className='w-100 h-100 object-fit-cover' alt="" />
                                    <div className='img-wrapper d-flex align-items-end'>
                                        <h3>{collection.title}</h3>
                                    </div>
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

export default Colllectionpage;