import Container from 'react-bootstrap/esm/Container';
import '../App.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function Colllection({ collectionData }) {
    return (
        <Container fluid className='p-128 pb-0' >
            <div className='section-info text-center mb-5'>
                <span className='subheading'>OUR FINISH PROJECTS</span>
                <h2>Furniture Collection</h2>
            </div>
            <Row className="px-2" >

                {
                    collectionData.map((collection, index) => (
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
        </Container>
    )
}

export default Colllection;