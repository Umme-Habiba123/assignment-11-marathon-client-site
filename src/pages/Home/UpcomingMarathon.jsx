import React, { use } from 'react';
import UpMarathonCard from './UpMarathonCard';





const UpcomingMarathon = ({upcomingMarathonePromise}) => {
   
    const upcomingMarathons=use(upcomingMarathonePromise)
    console.log('upcoming promise',upcomingMarathonePromise )

    return (
        <div className='w-8/12 mx-auto mt-10 lg:mt-30 lg:mb-20 mb-10'>

    <h1 className='text-4xl text-center text-gray-600 fira-sans-extralight mb-10'>Our Upcoming deals</h1>

           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-10 md:gap-8 '>
             {
               upcomingMarathons.map((upcomingMarathon=><UpMarathonCard key={upcomingMarathon._id}  upcomingMarathon={upcomingMarathon}></UpMarathonCard>)) 
            }
           
           </div>
        </div>
    );
};

export default UpcomingMarathon;