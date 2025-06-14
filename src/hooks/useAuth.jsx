import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';

export const useAuth = () => {
    const authInfo=use(AuthContext)

    return authInfo
};

export default useAuth;