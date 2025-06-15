import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

 const axiosInstance=axios.create({
   baseURL: 'http://localhost:5000'
 })

const useAxiosSecure = () => {
    const {user,signOutUser} =useAuth()

    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization=`Bearer ${user.accessToken}`
        return config
    })

    // response interseptor
    axiosInstance.interceptors.response.use(response=>{
      return response
    },error=>{
        if(error.status=== 401 || error.status=== 403){
            console.log('logout the user for 401')
            signOutUser(()=>{
                console.log('sign out user for 401 status code')
            }).catch(error=>{
                console.log(error)
            })
        }
        console.log('error in interceptors', error)
        return Promise.reject(error)
    })

    return axiosInstance
};

export default useAxiosSecure; 