import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function Services({ serviceData }) {
    return (
        <Container fluid >
            <Row className="my-2 px-1">

                {
                    serviceData.map((service, index) => (
                        <Col lg={3} md={6} sm={12} className="px-1 mb-2 mb-lg-0" key={index}>
                            <div className={`single-service p-4 ${service.classname}`}>
                                <div className='icon d-flex justify-content-center align-items-center mb-3 '>{service.icon}</div>
                                <h5>{service.title}</h5>
                                <p>{service.des}</p>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </Container>
    )
}

export default Services;