import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
const TravelBook = () => {
    const travels = useLoaderData();
    return (
        <div>
            <h1>{travels.name}</h1>
            <p>{travels.details.slice(0, 280)}</p>
            <Link to={`/book/${travels.id}`}>
                <Button variant="warning">Booking <FaArrowRight /></Button>
            </Link>

        </div>
    );
};

export default TravelBook;