import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import { FaPlay } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function About() {
    return (
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
                            <div className='d-flex align-items-center justify-content-md-start justify-content-center ply-btn'>
                                <div className='play-icon d-flex align-items-center justify-content-center'><FaPlay /></div>
                                <p className='fw-bold mb-0'>Watch Video</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;