import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '../../public/Img/logo.png'
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';


const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Navbar expand="lg" className='text-white'>
                <Container>
                    <Navbar.Brand className='fs-1 text-white'>Travel</Navbar.Brand>
                    <Navbar.Toggle className='text-white' aria-controls="navbarScroll" />
                    <Navbar.Collapse className='text-white' id="navbarScroll mx-auto">
                        <Form className="d-flex justify-content-center align-items-center mx-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0 gap-3 text-white"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='fs-5 text-white text-decoration-none' to='/'>Home</Link>
                            <Link className='fs-5 text-white text-decoration-none' to='/destination'>Destination</Link>
                            <Link className='fs-5 text-white text-decoration-none' to='/blog/:id'>Blog</Link>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {
                                user ? <Link onClick={handleLogOut} className='fs-5 text-white bg-warning px-3 py-1 rounded text-decoration-none' >Log Out</Link> :
                                    <Link className='fs-5 text-white bg-warning px-3 py-1 rounded text-decoration-none' to='/login'>Login</Link>
                            }



                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;