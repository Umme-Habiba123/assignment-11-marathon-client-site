import React from 'react';
import { IoLocation } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router';


const MarathonCards = ({marathon}) => {

    const {_id,image,title,location,startRegistration, 
endRegistration}=marathon

    return (
        <div className='fira-sans-extralight'>
      
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="marathon images" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl ">{title}</h2>

<div className='flex'>
    <p className='text-sm text-black font-bold'>Start : <span className='text-sm  text-gray-600 font-semibold poppins-extralight'> {new Date(startRegistration).toLocaleDateString('en-GB')}</span></p>

 <p className='text-sm  text-black font-bold'>End : <span className='text-sm text-gray-600 font-semibold poppins-extralight'> {new Date(endRegistration).toLocaleDateString('en-GB')}</span></p>

</div>
 <p className='flex'><IoLocation size={20}/><span className='text-gray-600 text-sm font-bold poppins-extralight'>{location}</span></p>

  <div className="card-actions mt-2">
  <Link to={`/cardDetails/${_id}`}>
  <button className="btn text-white shadow-2xl shadow-purple-400 bg-purple-400   border-purple-400 hover:bg-white hover:text-black">See Details</button>
  </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MarathonCards;