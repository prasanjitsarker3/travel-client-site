import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Travel = () => {
    const [travel, setTravel] = useState([]);
    useEffect(() => {
        fetch('https://travel-server-sites-prasanjitsarker3.vercel.app/travels')
            .then(res => res.json())
            .then(data => setTravel(data))
    }, [])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <Carousel responsive={responsive} className='gap-2'>
                {
                    travel.map(travel =>
                        <div key={travel.id} className=''>
                            <Link to={`/travels/${travel.id}`}>
                                <img src={travel.image} className='rounded border border-info' alt="" height={'250px'} width={'180px'} srcset="" />
                                <p className='text-center text-white position-absolute bottom-0 start-50 translate-middle'>{travel.name}</p>
                            </Link>
                        </div>)
                }
            </Carousel>;
        </div>
    );
};

export default Travel;