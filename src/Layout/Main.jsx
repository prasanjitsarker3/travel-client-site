import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Travel from '../Page/Travel/Travel';



const Main = () => {
    return (
        <div className='body'>
            <Header></Header>
            <div className=" d-flex justify-content-center align-items-center">
                <Container>
                    <Row className='text-white d-flex justify-content-center align-items-center mx-auto'>
                        <Col lg={5} xs={12} className='mx-auto pt-4'>
                            <Outlet></Outlet>
                        </Col>
                        <Col lg={7} xs={12} className='mx-auto pt-4'>
                            <Travel></Travel>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Main;