// import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import userImage from '../../assets/user.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    console.log('user her', user)

    return (
        <Container className='mb-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='fw-semibold'>{moment().format("dddd, MMMM DD, YYYY")}</p>
            </div>
            <Container className='d-flex bg-light p-3 border rounded' bg='light'>
                <Button variant="danger ">Danger</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </Container>

            <Navbar className='mt-3 p-1 align-items-center' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto m-auto text align-items-center gap-3">
                            <Link to="/" className='text-black text-decoration-none '>Home</Link>
                            <Link to="/" className='text-black text-decoration-none'>About</Link>
                            <Link to="/" className='text-black text-decoration-none'>Carrier</Link>



                        </Nav>
                        <Nav className='md-align-items-center'>
                            {
                                user && <Nav.Link className=''>
                                    <img className='rounded-circle' style={{ width: '40px', height: '40px' }} src={userImage} alt="" />
                                </Nav.Link>
                            }
                            <Nav.Link >
                                {
                                    user ? <Button variant='dark rounded-0 px-3 rounded-sm'>Logout</Button>
                                        :
                                        <Link to='/login'>
                                            <Button variant='dark rounded-0 px-3 rounded-sm'>Login</Button>
                                        </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default Header;