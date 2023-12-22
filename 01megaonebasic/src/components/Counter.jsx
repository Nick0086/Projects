import '../App.css'

import coundersec from '../assets/vector-art-3.png'
import { FaUsers, FaListAlt, FaAward } from "react-icons/fa";

function Counter() {
    return (
        <section className='bg-blue p-80' id="client">
            <div className='container flex space-between align-item wd-50'>
                <div>
                    <img className='img2' src={coundersec} alt="" />
                </div>
                <div>
                    <div className='section-info counter-info'>
                        <h6>We are megaone company</h6>
                        <h2>We have done some great stuff.</h2>
                        <p className='section-des' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                        <div className='counter flex space-between'>
                            <div className='single-counter'>
                                <FaUsers className='icon' />
                                <h2>500+</h2>
                                <p>Happy Clients</p>
                            </div>
                            <div className='single-counter'>
                                <FaListAlt className='icon' />
                                <h2>1074+</h2>
                                <p>Lines Of Code</p>
                            </div>
                            <div className='single-counter'>
                                <FaAward className='icon' />
                                <h2>600+</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter;