import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext)

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
    }
    return (
        <Container>
            <Row  >
                <Col md={4} className='mx-auto shadow p-5'>
                    <h3>Please Login</h3>
                    <Form onSubmit={handelLogin} className=''>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="email"
                                required
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className='w-100'>
                            Login
                        </Button>
                        <br />
                        <Form.Text className="text-muted">
                            You Have not any account <Link className='text-danger' to='/register'>Register</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default Login;