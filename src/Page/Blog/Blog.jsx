import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import first from '../../../public/Img/Rectangle 26.png'
import second from '../../../public/Img/Rectangle 27.png'
import third from '../../../public/Img/Rectangle 28.png'

const Blog = () => {
    const { id } = useParams();
    const blog = useLoaderData();
    return (
        <div className='text-white'>
            <div>
                
                <Row>
                    <Col className='p-2' lg={6} xs={12}>
                    <h2>{blog.name}</h2>
                        {/* <img src={blog.image} alt="" width={'300px'} className='rounded' height={"150px"} srcset="" /> */}
                        <div className='d-flex border justify-content-center align-items-center p-2 gap-2'>
                            <img src={first} alt="" srcset="" width={'190px'} height={"140px"} />
                            <div className=''>
                                <h1 className='fs-5'>Light Bright airy stylish apt & safe</h1>
                                <p>4 Guest  2 Bedroom   2 Beds 2 baths</p>
                                <p>Wif Air Condition Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                            </div>
                        </div>
                        <div className='d-flex border justify-content-center align-items-center p-2 gap-2'>
                            <img src={second} alt="" srcset="" width={'190px'} height={"140px"} />
                            <div className=''>
                                <h1 className='fs-5'>Apartment in Lost Panorama</h1>
                                <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p>Wif Air Condition Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                            </div>
                        </div>
                        <div className='d-flex border justify-content-center align-items-center p-2 gap-2'>
                            <img src={third} alt="" srcset="" width={'190px'} height={"140px"} />
                            <div className=''>
                                <h1 className='fs-5'>AR Lounge & Pool (r&r + b&b)</h1>
                                <p>4 Guest  2 Bedroom   2 Beds 2 baths</p>
                                <p>Wif Air Condition Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                            </div>
                        </div>







                    </Col>
                    <Col lg={6} xs={12}>

                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;