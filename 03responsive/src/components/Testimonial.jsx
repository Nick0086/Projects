import Container from 'react-bootstrap/esm/Container';
import '../App.css';

import OwlCarousel from 'react-owl-carousel';
import { userdata } from '../data/testimonial';
import TestimonitalCard from './TestimonitalCard';

const owl = {
    responsive: {
        1024: {
            items: 3
        },
        425: {
            items: 2
        },
        0: {
            items: 1
        }
    }

}


function Testimonial() {

    const data = userdata;

    return (
        <>
            <section className='p-128 bg-lights' >
                <Container>
                    <div className='section-info text-center mb-5'>
                        <span className='subheading'>TESTIMONIAL</span>
                        <h2>Happy Customers</h2>
                    </div>
                    <div>
                        <OwlCarousel className='owl-theme' loop margin={10} center={true} {...owl} >
                            {
                                data.map((data,index) => (
                                    <TestimonitalCard key={index} {...data} />
                                ))
                            }
                        </OwlCarousel>
                    </div>
                    {/* <Row className='justify-content-center'>
                        <Col lg={4} md={6} sm={12} className='mb-3 mb-lg-0 '>
                            <div className='bg-white rounded-2 p-4' >
                                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='client-info d-flex align-items-center'>
                                    <div className='client-pic'>
                                        <img src={require('../assets/person_1.jpg')} className='rounded-circle me-3 overflow-hidden' alt="" />
                                    </div>
                                    <div className='client-detail'>
                                        <h4 className='mb-1' >Roger Scott</h4>
                                        <p className='mb-0' >Marketing Manager</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='mb-3 mb-lg-0 '>
                            <div className='bg-white rounded-2 p-4 single-tesimonial active' >
                                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='client-info d-flex align-items-center'>
                                    <div className='client-pic  '>
                                        <img src={require('../assets/person_2.jpg')} className='rounded-circle me-3 overflow-hidden' alt="" />
                                    </div>
                                    <div className='client-detail'>
                                        <h4>Roger Scott</h4>
                                        <p className='mb-0'>Marketing Manager</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12} className='mb-3 mb-lg-0 '>
                            <div className='bg-white rounded-2 p-4' >
                                <p className='mb-3'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className='client-info d-flex align-items-center'>
                                    <div className='client-pic'>
                                        <img src={require('../assets/person_3.jpg')} className='rounded-circle me-3 overflow-hidden' alt="" />
                                    </div>
                                    <div className='client-detail'>
                                        <h4 className='mb-1'>Roger Scott</h4>
                                        <p className='mb-0'>Marketing Manager</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row> */}
                </Container>
            </section>
        </>
    )
}

export default Testimonial;