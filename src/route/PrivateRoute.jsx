import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext/AuthContext';

const PrivateRoute = ({children}) => {

    const {user}=use(AuthContext)

    if(!user){
        <Navigate to={'/logIn'}>

        </Navigate>
    }

    return children
};

export default PrivateRoute;