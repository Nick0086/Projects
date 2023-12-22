import '../App.css'
import aboutimg from '../assets/vector-art-2.png'
function About() {
    return(
        <section className=' p-80' id='about'>
        <div className='container flex space-between align-item wd-50'>
          <div>
            <div className='section-info'>
              <h6>We are megaone company</h6>
              <h2>We are making <span className='txt-blur'>design</span> better for everyone</h2>
              <p className='section-des' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
              <button className='btn slider-btn btn-pink'>learn more</button>
            </div>
          </div>
          <div>
            <img className='img2' src={aboutimg} alt="" />
          </div>
        </div>
      </section>
    )
}

export default About;