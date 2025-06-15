import useAxiosSecure from '../hooks/useAxiosSecure';

const useRegistrationApi = () => {
    const axiosSecure = useAxiosSecure()
     
    const myRegisterPromise=email=>{
      return axiosSecure.get(`/apply?email=${email}`)
      .then(res=>res.data)
    }

    return (
      myRegisterPromise
    );
};

export default useRegistrationApi; 