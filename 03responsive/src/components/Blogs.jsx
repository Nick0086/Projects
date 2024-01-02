import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { blogData } from '../data/blog';
import BlogCard from './BlogCard';


function Blogs() {


    const data = blogData;

    return (
        <Container className='p-128' >
            <div className='section-info text-center mb-5'>
                <span className='subheading'>OUR BLOG</span>
                <h2>Recent From Blog</h2>
            </div>
            <Row className='mb-5'>
                {
                    data.map((data, index) => (
                        <Col md={6} key={index} className='mb-4'>
                            <BlogCard {...data} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
export default Blogs;