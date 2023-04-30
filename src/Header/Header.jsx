import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import logo from '../../public/Img/logo.png'
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar >
                <Container>
                    <Card.Img className='img-size text-white' variant="top" src={logo} />

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex justify-content-center align-items-center mx-auto">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                            />
                            <Button variant="outline-success"><FaSearch /></Button>
                        </Form>
                        <Nav
                            className="ms-auto my-2 my-lg-0 gap-3 underline-none"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div>
                            <Link to='/' className='fw-bold fs-5 text-white'>Home</Link>
                            </div>
                            <Link className='fw-bold fs-5 text-white'>Destination</Link>
                            <Link to="/blog" className='fw-bold fs-5 text-white'>Blog</Link>
                            <Link className='fw-bold fs-5 text-white'>Login</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;