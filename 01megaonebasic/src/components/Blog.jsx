import '../App.css'
function Blog() {
    return(
        <section className='p-80 bg-light' id="blog" >
        <div className='container'>
          <div className='project-head blog-head' >
            <h6>We are megaone company</h6>
            <h2>Our <span className='txt-blur'>recent news</span> will keep everyone updated</h2>
          </div>
          <div className='blog-container flex space-between'>
            <div className='single-blog ' >
              <div className='blog-thum'>
                <img src={require('../assets/blog-news-1.jpg')} alt="" />
              </div>
              <div className='blog-content'>
                <p className='txt-pink' >October 29, 2020</p>
                <h3>Web design is fun</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...</p>
                <div className='user-info flex align-item'>
                  <div className='user-avatr blue-bg'>
                    <img src={require('../assets/avatar-1.png')} alt="" />
                  </div>
                  <p>Hena Sword</p>
                </div>
              </div>
            </div>

            <div className='single-blog ' >
              <div className='blog-thum'>
                <img src={require('../assets/blog-news-2.jpg')} alt="" />
              </div>
              <div className='blog-content'>
                <p className='txt-pink' >October 29, 2020</p>
                <h3>Future of websites</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...</p>
                <div className='user-info flex align-item'>
                  <div className='user-avatr purple-bg'>
                    <img src={require('../assets/avatar-2.png')} alt="" />
                  </div>
                  <p>David Villas</p>
                </div>
              </div>
            </div>

            <div className='single-blog ' >
              <div className='blog-thum'>
                <img src={require('../assets/blog-news-3.jpg')} alt="" />
              </div>
              <div className='blog-content'>
                <p className='txt-pink' >October 29, 2020</p>
                <h3>Digital marketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor sit am...</p>
                <div className='user-info flex align-item'>
                  <div className='user-avatr pink-bg'>
                    <img src={require('../assets/avatar-5.png')} alt="" />
                  </div>
                  <p>Jhon Walker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Blog;