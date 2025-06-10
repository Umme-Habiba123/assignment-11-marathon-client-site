import React from 'react';

const CardDetails = ({marathon}) => {

    const {title}=marathon
    return (
        <div>
           <h1>{title}</h1>
        </div>
    );
};

export default CardDetails;