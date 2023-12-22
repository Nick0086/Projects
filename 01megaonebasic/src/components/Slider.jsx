import '../App.css'
import sliderimg from '../assets/vector-art-1.png'

import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 50px;
  text-transform: capitalize;
  color: #ffffff;
  letter-spacing: 1px;

`;
function Slider() {
    return (
        <section className='bg-main slider-area p-80'>
            <div className='flex container'>
                <div className="slider-img flex justify-end align-item w-50">
                    <img src={sliderimg} className='sliderimg' alt="" />
                </div>
                <div className="slider-body w-50 flex align-item">
                    <div className='slider-contain'>
                        <H1><span className='header-tet'>creative</span> digital agency</H1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit atque esse iure consequuntur optio modi enim nobis doloribus dignissimos eius! Voluptatum deserunt esse atque.</p>
                        <button className='btn slider-btn'>learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider;