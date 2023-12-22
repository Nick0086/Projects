import '../App.css'
import member1 from '../assets/team-img1.png'
import member2 from '../assets/team-img2.png'
import member3 from '../assets/team-img3.png'
import shape1 from '../assets/shape-1.png'
import shape2 from '../assets/shape-2.png'
import shape3 from '../assets/shape-3.png'
import {FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Team() {
    return (
        <section className='p-80 team-section'>
            <div className='container'>
                <div className="team-top-section">
                    <h6>We are megaone company</h6>
                    <h2>We have some <span className='txt-blur'>great</span>talented staff</h2>
                    <p className='section-des' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                </div>
                <div className='team-section flex space-between'>
                    <div className="single-member">
                        <div className="member-img">
                            <img src={member1} alt="" />
                        </div>
                        <div className="member-info">
                            <div className='member-name'>
                                <img src={shape1} alt="" />
                                <h3>David Joe</h3>
                            </div>
                            <p>Director</p>
                            <ul className='flex space-between'>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-member">
                        <div className="member-img">
                            <img src={member2} alt="" />
                        </div>
                        <div className="member-info">
                            <div className='member-name'>
                                <img src={shape2} alt="" />
                                <h3>Natalie Roy</h3>
                            </div>
                            <p>Director</p>
                            <ul className='flex space-between'>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="single-member">
                        <div className="member-img">
                            <img src={member3} alt="" />
                        </div>
                        <div className="member-info">
                            <div className='member-name'>
                                <img src={shape3} alt="" />
                                <h3>Jhon Wok</h3>
                            </div>
                            <p>Director</p>
                            <ul className='flex space-between'>
                                <li><a href="#"><FaFacebookF /></a></li>
                                <li><a href="#"><FaLinkedinIn /></a></li>
                                <li><a href="#"><FaTwitter /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Team;