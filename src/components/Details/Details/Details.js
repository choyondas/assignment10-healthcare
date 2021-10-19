import React from 'react';
import { useParams } from 'react-router';
import "./Details.css"
const Details = () => {
    const { serviceId } = useParams();
    return (
        <div className='details-div'>
            <h2>this is details : {serviceId}</h2>
        </div>
    );
};

export default Details;