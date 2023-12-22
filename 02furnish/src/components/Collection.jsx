import '../App.css';

function Colllection() {
    return (
        <section className=' collection-sec'>
            <div className='section-info txt-center'>
                <span className='subheading'>OUR FINISH PROJECTS</span>
                <h2>Furniture Collection</h2>
            </div>
            <div className='collection-gallery'>
                <div className='single-item item-1'>
                    <img src={require('../assets/gallery-1.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3 >Business Finance Consulting</h3>
                    </div> 
                </div>
                <div className='single-item item-1'>
                    <img src={require('../assets/gallery-2.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3>Business Finance Consulting</h3>
                    </div>
                </div>
                <div className='single-item item-2'>
                    <img src={require('../assets/gallery-3.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3>Business Finance Consulting</h3>
                    </div>
                </div>
                <div className='single-item item-3'>
                    <img src={require('../assets/gallery-4.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3>Business Finance Consulting</h3>
                    </div>
                </div>
                <div className='single-item item-1'>
                    <img src={require('../assets/gallery-5.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3>Business Finance Consulting</h3>
                    </div>
                </div>
                <div className='single-item item-4'>
                    <img src={require('../assets/gallery-6.jpg')} className='img' alt="" />
                    <div className='img-wrapper flex'>
                        <h3>Business Finance Consulting</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Colllection;