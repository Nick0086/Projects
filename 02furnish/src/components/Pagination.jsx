import '../App.css';
import { FaLessThan,FaGreaterThan } from "react-icons/fa";


function Pagination() {
    return( 
        <>
            <section className='Pagination-warraper container'>
                <ul className='flex justify-center pagi-list'>
                    <li><FaLessThan className='pagi-icon' /></li>
                    <li className='active'>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li><FaGreaterThan className='pagi-icon' /></li>
                </ul>
            </section>
        </>
    )
}

export default Pagination;