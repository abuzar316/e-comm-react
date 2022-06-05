import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <>
            <>
                <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar><Link className='navbar-brand' to="/" >E Store </Link> </Navbar>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className='my-manu'>
                                <Nav> <Link to="/">Home </Link>  </Nav>
                                <Nav> <Link to="/product">Products </Link>  </Nav>
                                <Nav> <Link to="/about">About </Link>  </Nav>
                                <Nav> <Link to="/contact">Contact </Link>  </Nav>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </>
    )
}
export default Header;