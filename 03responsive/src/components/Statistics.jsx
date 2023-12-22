import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Statistics() {
    return (
        <section className='bg-prime p-80'>
            <Container>
                <div className='section-info text-center mb-5'>
                    <span className='subheading'>GREAT REVIEWS FOR OUR SERVICES</span>
                    <h2>Technical Statistics</h2>
                </div>
                <Row>
                    <Col lg={3} md={6} sm={12} className='mb-3 mb-lg-0 '>
                        <div className='text-center'>
                            <h2 className='countup mb-2'>20</h2>
                            <p className='stat-des'>YEAR OF EXPERIENCED</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='mb-3 mb-lg-0 '>
                        <div className='text-center' >
                            <h2 className='countup'>10,200</h2>
                            <p className='stat-des' >SATISFIED CUSTOMERS</p>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className='mb-3 mb-lg-0 '>
                        <div className='text-center' >
                            <h2 className='countup'>9,850</h2>
                            <p className='stat-des' >PROJECT COMPLETED</p>
                        </div>

                    </Col>
                    <Col lg={3} md={6} sm={12} className='mb-3 mb-lg-0 '>
                        <div className='text-center' >
                            <h2 className='countup'>20</h2>
                            <p className='stat-des' >GET AWARDS</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Statistics;