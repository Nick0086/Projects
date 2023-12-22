import '../App.css';

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <nav className='flex justify-between alight-center' >
                    <a href="#" className='navbrand' >Furnish</a>
                    <ul className='nav-list flex justify-between'>
                        <li><a href="#" className='active'>home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">collection</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;