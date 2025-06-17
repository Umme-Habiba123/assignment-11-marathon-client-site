import React, { Suspense, use } from 'react';
import MarathonsNews from '../Home/MarathonsNews';
// import MarathonCardDetails from '../cardDetails/MarathonCardDetails';

import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { marathonsPromise } from '../../api/marathonsApi';

const MyMarathonsList = () => {
    
    const {user}=use(AuthContext)
    const data=useLoaderData()

    return (
        <div>
          
             <MarathonsNews marathonsPromise={marathonsPromise(user.email,user.accessToken)} data={data}></MarathonsNews  >
     
          
           
        </div>
    );
};

export default MyMarathonsList;