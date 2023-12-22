import '../App.css';
import { FaPlay} from "react-icons/fa";

function About() {
    return (
        <section className='about-section p-128'>
            <div className='flex justify-end alight-center'>
                <div className='width-50 section-info' >
                    <span className='subheading'>
                        ABOUT FURNISH
                    </span>
                    <h2>Quality Makes the Belief for Customers</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <div className='flex alight-center ply-btn'>
                        <div className='play-icon flex alight-center justify-center'><FaPlay /></div>
                        <p className='fw-600'>Watch Video</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;