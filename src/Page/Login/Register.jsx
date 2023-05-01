import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import facebook from '../../../public/Img/fb.png';
import google from '../../../public/Img/google.png';
import { AuthContext } from '../../firebase/AuthProvider';


const Register = () => {
    const { userCreate } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate=useNavigate();

    const handleCreateSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError(" Ensure string has two digits")
        }
        else if (password.length < 6) {
            setError("Ensure Password length is 6");
        }
        setError('')
        setSuccess('')
        userCreate(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setSuccess('Successful Login !')
                form.reset();
                navigate('/')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <Container >
            <Row className='d-flex justify-content-center mt-2'>
                <Col lg={4} md={6} xs={12} >
                    <Form onSubmit={handleCreateSignUp} className='text-white fs-5 border px-4'>
                        <Form.Group
                            className="mb-2" controlId="formGroupEmail">
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group
                            className="mb-2" controlId="formGroupEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Enter Password" />
                        </Form.Group>
                        <div className='d-flex justify-content-center'>
                            <input className='w-75 bg-warning border-0 py-1 rounded text-white fw-bold fs-6' type="submit" value="Sign Up" />
                        </div>

                        <p className='text-center fs-6'><small>Already have an account ? <Link to='/login' className='text-blue fw-bold'>Login</Link></small></p>
                        <p className='text-center '><small className='text-success'>{success}</small></p>
                        <p className='text-center '><small className='text-danger'>{error}</small></p>

                    </Form>
                    <hr className='text-white border border-2 border-white  mx-4' />
                    <div className='d-flex  gap-2 justify-content-center align-items-center border rounded-4 mx-2 mb-1'>
                        <img src={facebook} alt="" width={"35px"} srcset="" />
                        <p className='fs-5 text-white  pt-2'>Continue With Facebook</p>
                    </div>
                    <div className='d-flex  gap-2 justify-content-center align-items-center border rounded-4 mx-2 p'>
                        <img src={google} alt="" width={"33px"} srcset="" />
                        <p className='fs-5 text-white  pt-2'>Continue With Facebook</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Register;