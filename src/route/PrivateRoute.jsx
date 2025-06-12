import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const {user,loading}=use(AuthContext)
    const location=useLocation()
 

    if(loading){
      return <span  className="loading  mx-auto loading-ring loading-3xl"></span>
    }



    if(!user){
      return <Navigate state={location.pathname} to={'/logIn'}>

        </Navigate>
    }

    return children
};

export default PrivateRoute;