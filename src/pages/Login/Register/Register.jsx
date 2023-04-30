import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, user } = useContext(AuthContext)
    const [acceptTerms, setAcceptTerms] = useState(false)

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const acceptTerms = form.acceptTerms.checked;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password, acceptTerms)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                updateUserProfile(name)
                    .then(updateName => {
                        console.log(user)
                    })
                    .catch(error => console.log(error))


            })

        // set usr name 

    }
    return (
        <Container>
            <Row  >
                <Col md={4} className='mx-auto shadow p-5'>
                    <h3>Please Register</h3>
                    <Form onSubmit={handelLogin} className=''>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="text"
                                name="photoUrl"
                                placeholder="PhotoUrl"
                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" >
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
                        <Form.Group className="mb-3" >
                            <Form.Check
                                onClick={() => setAcceptTerms(!acceptTerms)}
                                type="checkbox"
                                label="Accept Terms and Condition"
                                name='acceptTerms'
                            />
                        </Form.Group>
                        <Button disabled={!acceptTerms} variant="secondary" type="submit" className='w-100'>
                            Register
                        </Button>
                        <br />
                        <Form.Text className="text-muted">
                            Already Have an account <Link className='text-danger' to='/login'>Login</Link>
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default Register;