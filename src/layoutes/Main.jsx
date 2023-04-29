// import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../shared/LeftNav/LeftNav';
import RightNav from '../shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar/NavigationBar';
// import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='mx-auto'>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>

                    {/* main content  */}
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>


                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;