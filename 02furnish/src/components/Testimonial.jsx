import '../App.css';

function Testimonial () {
    return(
        <section className='p-128 bg-light'>
        <div className='container'>
          <div className='section-info txt-center'>
            <span className='subheading'>TESTIMONIAL</span>
            <h2>Happy Customers</h2>
          </div>
          <div className='testmonial flex justify-between'>
            <div className='single-tesimonial'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='client-info flex alight-center'>
                <div className='client-pic'>
                  <img src={require('../assets/person_1.jpg')} className='img' alt="" />
                </div>
                <div className='client-detail'>
                  <h4>Roger Scott</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className='single-tesimonial active'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='client-info flex alight-center'>
                <div className='client-pic'>
                  <img src={require('../assets/person_2.jpg')} className='img' alt="" />
                </div>
                <div className='client-detail'>
                  <h4>Roger Scott</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className='single-tesimonial'>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='client-info flex alight-center'>
                <div className='client-pic'>
                  <img src={require('../assets/person_3.jpg')} className='img' alt="" />
                </div>
                <div className='client-detail'>
                  <h4>Roger Scott</h4>
                  <p>Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default  Testimonial;