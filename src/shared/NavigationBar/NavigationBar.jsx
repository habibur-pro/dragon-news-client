import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import userImage from '../../assets/user.png'

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <Container className='mb-5 '>
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
                                    user ? <Button onClick={handleLogOut} variant='dark rounded-0 px-3 rounded-sm'>Logout</Button>
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

export default NavigationBar;