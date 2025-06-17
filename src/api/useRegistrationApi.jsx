import useAxiosSecure from '../hooks/useAxiosSecure';

const useRegistrationApi = () => {
  const axiosSecure = useAxiosSecure();

  const getMyApplications = (email) => {
    if (!email) return Promise.resolve([]);
    return axiosSecure.get(`/apply?email=${email}`).then((res) => res.data);
  };

  return { getMyApplications };
};

export default useRegistrationApi;
