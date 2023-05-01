import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const Book = () => {
    const books = useLoaderData();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='text-white d-flex justify-content-center align-items-center'>
            <Row>
                <Col lg={6} xs={12} className='py-4 mt-5'>
                    <h1 className='fs-1 fw-bold '>{books.name}</h1>
                    <h3 className='fs-5 py-3 '>{books.details}</h3>
                </Col>
                <Col lg={6} xs={12} className='py-4 mt-5 bg-light text-black rounded p-3'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3 d-flex justify-content-center align-items-center">
                            <Form.Group as={Col} md="8" controlId="validationCustom01">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Place"
                                    defaultValue=""
                                />

                                <Form.Label>Destination</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter Place"
                                    defaultValue=""
                                />
                            </Form.Group>


                        </Row>
                        <Row className="mb-3 d-flex justify-content-center align-items-center">

                            <Form.Group as={Col} md="4" controlId="validationCustom04">
                                <Form.Label>Form</Form.Label>
                                <Form.Control type="text" placeholder="DD-MM-YY" required />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustom05">
                                <Form.Label>To</Form.Label>
                                <Form.Control type="text" placeholder="DD-MM-YYYY" required />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 d-flex justify-content-center align-items-center">
                            <Form.Check
                                required
                                label="Agree to terms and conditions"
                                feedback="You must agree before submitting."
                                feedbackType="invalid"
                            />
                        </Form.Group>
                        <Link to={`/blog/${books.id}`}>
                            <div className='w-75 d-flex justify-content-center align-items-center ms-5'>
                                <Button className='w-75 text-centern pe-2' variant="warning" type="submit">Submit form</Button>
                            </div>
                        </Link>

                    </Form>

                    

                </Col>
            </Row>
        </div>
    );
};

export default Book;