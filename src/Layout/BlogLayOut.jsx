import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';

const BlogLayOut = () => {
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

export default BlogLayOut;