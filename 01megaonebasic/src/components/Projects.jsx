import '../App.css'
function Projects() {
    return (
        <section className='p-80' id="work"  >
            <div className='container' >
                <div className='project-head' >
                    <h6>We are megaone company</h6>
                    <h2>We have <span className='txt-blur'>developed</span> some great projects</h2>
                    <p className='section-des' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                    <ul className='project-cat flex space-between'>
                        <li className='active' >all</li>
                        <li>/</li>
                        <li>Graphic Design</li>
                        <li>/</li>
                        <li>Web design</li>
                        <li>/</li>
                        <li>SEO</li>
                        <li>/</li>
                        <li>Marketing</li>
                    </ul>
                </div>
                <div className='project-body' >
                    <div className='project-grid'>
                        <div className="gallery project-1">
                            <img src={require('../assets/work-1.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-2">
                            <img src={require('../assets/work-2.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-3">
                            <img src={require('../assets/work-3.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-4">
                            <img src={require('../assets/work-4.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-5">
                            <img src={require('../assets/work-5.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-6">
                            <img src={require('../assets/work-6.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-7">
                            <img src={require('../assets/work-7.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                        <div className="gallery project-8">
                            <img src={require('../assets/work-8.jpg')} alt="" />
                            <div className='hover-box flex align-item justify-contain' >
                                <h6>latest work</h6>
                                <p>see our amazing work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;