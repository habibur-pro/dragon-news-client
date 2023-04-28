import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div className='mx-auto'>
            <Header></Header>

            <Container>
                <Row>


                    {/* main content  */}
                    <Col lg={9}>
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

export default NewsLayout;