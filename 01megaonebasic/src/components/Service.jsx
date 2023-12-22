import '../App.css'

import { FaRegFolderOpen, FaCode, FaEdit } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

function Service() {
    return (
        <section className=' p-80' >
            <div className='container flex space-between align-item service-section'>
                <div className='single-service'>
                    <div className="blue flex align-item justify-contain service-icon">
                        <FaRegFolderOpen />
                    </div>
                    <h6>World leader in consulting and finance</h6>
                </div>
                <div className='single-service'>
                    <div className="midnight flex align-item justify-contain service-icon">
                        <FaCode />
                    </div>
                    <h6>A focused team with a specialized skill</h6>
                </div>
                <div className='single-service'>
                    <div className="purple flex align-item justify-contain service-icon">
                        <IoIosSettings />
                    </div>
                    <h6>Trusted and professional advisors for you</h6>
                </div>
                <div className='single-service'>
                    <div className="pink flex align-item justify-contain service-icon">
                        <FaEdit />
                    </div>
                    <h6>Experience to give you a better results</h6>
                </div>
            </div>
        </section>
    )
}

export default Service;