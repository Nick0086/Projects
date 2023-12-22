import '../App.css'

import parr from '../assets/vector-art-4.png'
function Parallox() {
    return (
        <section className=' p-80 bg-light'>
            <div className='container flex space-between align-item wd-50'>
                <div>
                    <div className='section-info'>
                        <h6>We are megaone company</h6>
                        <h2><span className='txt-pink' >Robust Design</span> and Development Solutions</h2>
                        <p className='section-des' >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                        <button className='btn slider-btn btn-pink'>learn more</button>
                    </div>
                </div>
                <div>
                    <img className='img2' src={parr} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Parallox;