import React, { Suspense } from 'react';
import MarathonsNews from '../Home/MarathonsNews';
import MarathonCardDetails from '../cardDetails/MarathonCardDetails';

import { useLoaderData } from 'react-router';




const MyMarathonsList = () => {
    
    const data=useLoaderData()

    return (
        <div>
          
             <MarathonsNews data={data}></MarathonsNews>
     
            {/* <MarathonCardDetails data={data}></MarathonCardDetails> */}
           
        </div>
    );
};

export default MyMarathonsList;