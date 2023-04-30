import React from 'react';
import Header from '../Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const BookLayout = () => {
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

export default BookLayout;