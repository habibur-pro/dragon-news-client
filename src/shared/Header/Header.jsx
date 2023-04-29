// import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {


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


        </Container>

    );
};

export default Header;