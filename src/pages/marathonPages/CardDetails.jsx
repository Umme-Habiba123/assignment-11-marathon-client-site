// import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const CardDetails = () => {
     const data=useLoaderData()
       const { image, title, location, startRegistration, endRegistration } = data;
       console.log(data)
    return (
        <div>
            <img src={image} alt="" />
            <p>{title}</p>
            <p>{location}</p>
            <p>{startRegistration}</p>
            <p>{endRegistration}</p>
        </div>
    );
};

export default CardDetails;