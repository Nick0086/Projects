import '../App.css'
import logo from '../assets/logo-white.png';
function Header() {
    return (
        <header className='bg-main'>
            <nav className='container header-area align-item space-between flex'>
                <a href="#"><img className='logo-img' src={logo} alt="#" /></a>
                <ul className='flex nav-list align-item'>
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#work">our work</a></li>
                    <li><a href="#client">clients</a></li>
                    <li><a href="#blog">our blogs</a></li>
                    <li><a href="#contact">contact us</a></li>
                    <li><button className='btn nav-btn'>get a quote</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;