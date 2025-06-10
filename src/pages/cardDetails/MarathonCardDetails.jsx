import React from 'react';
import { useLoaderData } from 'react-router';

const MarathonCardDetails = () => {

 const {image,organizer, location,registrationDates, title,description, distance, date,startTime
} = useLoaderData()

    return (
        <div className='flex w-10/12 mx-auto my-10 gap-15'>
           <div>
             <h1><img className='lg:w-[800px]  rounded-xl border-5 border-purple-300 hover:scale-1.2 animate-pulse transition duration-200' src={image} alt="belt" /></h1>
           </div>

            <div className='space-y-5'>
                <p className='text-2xl font-bold'>Title : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {title}</span></p>

                <p className='text-2xl font-bold'>Organizer : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {organizer}</span></p>

                <p className='text-2xl font-bold'>Description : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {description}</span></p>

                <p className='text-2xl font-bold'>Location : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {location}</span></p>

                <p className='text-2xl font-bold'>RegistrationDates : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {registrationDates}</span></p>

                <p className='text-2xl font-bold'>Distance : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {distance}</span></p>

                <p className='text-2xl font-bold'>Date : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {date}</span></p>

                <p className='text-2xl font-bold'>startTime : <span className='text-xl font-normal text-gray-600 edu-nsw-act-cursive-font'>
                    {startTime}</span></p>

                 <button className='btn text-lg bg-black text-white lg:py-6  hover:bg-purple-400 '>Apply now</button>
            </div>
           
        </div>
    );
};

export default MarathonCardDetails;