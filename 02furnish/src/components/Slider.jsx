import '../App.css';

function Slider() {
    return (
        <section className='bg-prime position-relative'>
            <div className='container'>
                <div className='flex'>
                    <div className='width-50'>
                        <div className='slider-body slider-des flex justify-center'>
                            <h1>Best Design of <span className='slider-span'>Furniture Collections</span></h1>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <div>
                                <a href="#" className='btn slider-btn'>discover</a>
                            </div>
                        </div>
                    </div>
                    <div className='width-50'></div>
                    <img src={require('../assets/bg_2.jpg')} className='img slider-img' alt="" />
                </div>
            </div>
        </section>
    )
}

export default Slider;