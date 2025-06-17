import React, { Suspense, use } from 'react';
import MarathonsNews from '../Home/MarathonsNews';
// import MarathonCardDetails from '../cardDetails/MarathonCardDetails';

import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import useMarathonsApi from '../../api/useMarathonsApi';

const MyMarathonsList = () => {

    const {marathonsPromise}=useMarathonsApi()
    
    const {user}=use(AuthContext)
    const data=useLoaderData()

    return (
        <div>
          
            <Suspense fallback={<h1 className='text-center text-4xl font-bold'>....Loading.....</h1>}>
            
                 <MarathonsNews marathonsPromise={marathonsPromise(user.email,user.accessToken)} data={data}></MarathonsNews  >
            </Suspense>
     
          
           
        </div>
    );
};

export default MyMarathonsList;