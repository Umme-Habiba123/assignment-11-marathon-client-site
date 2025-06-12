import React from 'react';
import { useLoaderData } from 'react-router';
import MarathonCards from './MarathonCards';


const Marathons = () => {

    const marathons=useLoaderData()
    console.log(marathons)

    return (
        <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 my-20 '>
            {
                marathons.map((marathon)=><MarathonCards key={marathon._id} marathon={marathon}></MarathonCards>)
            }

           
            
        </div>
    );
};

export default Marathons;