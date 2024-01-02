import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Statistics({ statisticsData }) {
    return (
        <section className='bg-prime p-80'>
            <Container>
                <div className='section-info text-center mb-5'>
                    <span className='subheading'>GREAT REVIEWS FOR OUR SERVICES</span>
                    <h2>Technical Statistics</h2>
                </div>
                <Row>
                    {
                        statisticsData.map((statistics, index) => (
                            <Col lg={3} md={6} sm={12} className='mb-3 mb-lg-0 ' key={index}>
                                <div className='text-center'>
                                    <h2 className='countup'>{statistics.stat}</h2>
                                    <p className='stat-des'>{statistics.des}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Statistics;