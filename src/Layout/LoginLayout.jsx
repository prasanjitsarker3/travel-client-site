import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const LoginLayout = () => {
    return (
        <div className='body'>
            <Header></Header>
            <div className=" d-flex justify-content-center align-items-center">
                <Container>
                    <Outlet></Outlet>
                </Container>
            </div>
        </div>
    );
};

export default LoginLayout;