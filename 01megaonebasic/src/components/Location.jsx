import '../App.css'
function Location() {
    return(
        <section className='p-80 bg-bl location-area' >
        <div className='container'>
          <div className='slider flex space-between'>
            <div className='single-client'>
              <img src={require('../assets/client-3.png')} alt="#" />
            </div>
            <div className='single-client'>
              <img src={require('../assets/client-3.png')} alt="#" />
            </div>
            <div className='single-client'>
              <img src={require('../assets/client-3.png')} alt="#" />
            </div>
            <div className='single-client'>
              <img src={require('../assets/client-3.png')} alt="#" />
            </div>
          </div>

          <div className='map-frsm' >
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.74842412298!2d72.41492550290776!3d23.020474104340572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701434030392!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    )
}

export default Location;