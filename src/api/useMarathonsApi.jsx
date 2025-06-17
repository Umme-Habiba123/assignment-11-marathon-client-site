import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useMarathonsApi = () => {
    const axiosSecure=useAxiosSecure()

    const  marathonsPromise= async email=>{
        return axiosSecure.get(`/marathons?email=${email}`).then(res=>{res.data
        })
    }

    return {
         marathonsPromise
    }
      

}

export default useMarathonsApi;