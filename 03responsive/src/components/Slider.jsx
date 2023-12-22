import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Slider() {
    return (
        <>
            <div className='bg-prime position-relative'>
                <Container>
                    <Row className='position-relative z-1'>
                        <Col md={6}>
                            <div className='vh-100 d-flex justify-content-center flex-column '>
                                <h1 className='slider-title mb-4' >Best Design of <span className='slider-span d-inline-block d-md-block'>Furniture Collections</span></h1>
                                <p className='w-75 slider-des mb-4'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <div className='d-block' > 
                                    <a href="#" className='btn slider-btn'>discover</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <img src={require('../assets/bg_2.jpg')} className='position-absolute col-md-6 col-8 vh-100 object-fit-cover z-0  top-0 end-0' alt="" />
                </Container>
            </div>
        </>
    )
}

export default Slider;