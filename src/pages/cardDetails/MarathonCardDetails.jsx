import React from 'react';
import { useLoaderData } from 'react-router';

const MarathonCardDetails = () => {

    const data = useLoaderData()
    console.log(data)

    const { image, location, marathonDate, title, description, distance,
        startRegistration, endRegistration, createAt } = data



    return (
        <div className='flex w-10/12 mx-auto my-10 gap-15'>
            <div>
                <h1><img className='lg:w-[800px]  rounded-xl border-5 border-purple-300 hover:scale-1.2 animate-pulse transition duration-200' src={image} alt="belt" /></h1>
            </div>

            <div className='space-y-5'>
                <p className='text-2xl font-bold'>Title : <span className='text-xl  text-gray-600 edu-nsw-act-cursive-font font-semibold'>
                    {title}</span></p>

                <p className='text-2xl font-bold'>Description : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {description}</span></p>


                <p className='text-2xl font-bold'>Location : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {location}</span></p>

                <p className='text-2xl font-bold'>Creation Time : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {new Date(createAt).toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false
                    })}</span></p>




                <p className='text-2xl font-bold'>Marathons Dates : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {new Date(marathonDate).toISOString().split("T")[0]}</span></p>

                <p className='text-2xl font-bold'>Distance : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {distance}</span></p>

                <p className='text-2xl font-bold'>Start Registration
                    : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                        {new Date(startRegistration).toISOString().split("T")[0]}</span></p>

                <p className='text-2xl font-bold'>End Registration Time : <span className='text-xl font-semibold text-gray-600 edu-nsw-act-cursive-font'>
                    {new Date(endRegistration).toISOString().split("T")[0]}</span></p>

                <button className='btn text-lg bg-black text-white lg:py-6  hover:bg-purple-400 '>Apply now</button>
            </div>

        </div>
    );
};

export default MarathonCardDetails;