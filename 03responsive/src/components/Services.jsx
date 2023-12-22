import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaRegHandshake } from "react-icons/fa6";
import { GiWoodBeam } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

function Services() {
    return (
        <Container fluid >
            <Row className="my-2 px-1">
                <Col lg={3} md={6} sm={12} className="px-1 mb-2 mb-lg-0">
                    <div className='single-service color-1 p-4'>
                        <div className='icon d-flex justify-content-center align-items-center mb-3 '><FaRegHandshake /></div>
                        <h5>Amazing Deals</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="px-1 mb-2 mb-lg-0">
                    <div className='single-service color-2 p-4'>
                        <div className='icon d-flex justify-content-center align-items-center mb-3'><GiWoodBeam /></div>
                        <h5>Quality Furniture</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="px-1 mb-2 mb-lg-0">
                    <div className='single-service color-3 p-4'>
                        <div className='icon d-flex justify-content-center align-items-center mb-3'><LuSofa /></div>
                        <h5>Modern Design</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="px-1 mb-2 mb-lg-0">
                    <div className='single-service color-4 p-4'>
                        <div className='icon d-flex justify-content-center align-items-center mb-3'><RiCustomerService2Line /></div>
                        <h5>Best Support</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Services;