import '../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Headers({headerData}) {
    return (
        <>
            <Navbar expand="md" className="bg-body-tertiar" fixed="top"  >
                <Container>
                    <Navbar.Brand href="#">Furnish</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
                        <Nav
                            className="my-2 my-lg-0 "
                            style={{ maxHeight: '300px' }}
                            navbarScroll
                        >
                            {
                                headerData.map((item,index) => (
                                    <Link key={index} to={item.link}  className='nav-link' >{item.page}</Link>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers;