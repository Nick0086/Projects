import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Colllection() {
    return (
        <Container fluid className='p-128 pb-0' >
            <div className='section-info text-center mb-5'>
                <span className='subheading'>OUR FINISH PROJECTS</span>
                <h2>Furniture Collection</h2>
            </div>

            <Row className="px-2" >
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
            </Row>
        </Container>
    )
}

export default Colllection;