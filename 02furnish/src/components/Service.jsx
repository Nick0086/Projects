import '../App.css';
import { FaRegHandshake } from "react-icons/fa6";
import { GiWoodBeam } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { RiCustomerService2Line } from "react-icons/ri";

function Service() {
    return (
        <section className='container-fluid service-section' >
            <div className='flex'>
                <div className='width-25 color-1'>
                    <div className='single-service'>
                        <div className='icon flex justify-center alight-center'><FaRegHandshake /></div>
                        <h5>Amazing Deals</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </div>
                <div className='width-25 color-2'>
                    <div className='single-service'>
                        <div className='icon flex justify-center alight-center'><GiWoodBeam /></div>
                        <h5>Quality Furniture</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </div>
                <div className='width-25 color-3'>
                    <div className='single-service'>
                        <div className='icon flex justify-center alight-center'><LuSofa /></div>
                        <h5>Modern Design</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </div>
                <div className='width-25 color-4'>
                    <div className='single-service'>
                        <div className='icon flex justify-center alight-center'><RiCustomerService2Line /></div>
                        <h5>Best Support</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;