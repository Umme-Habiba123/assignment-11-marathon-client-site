import React, { Suspense, useMemo, useContext, use } from 'react';
import MyApplyList from './MyApplyList';
import useRegistrationApi from '../../api/useRegistrationApi';
// import { AuthContext } from '../../context/AuthContext/AuthContext';
import useAuth from '../../hooks/useAuth';

const MyRegistrationPage = () => {
  const { user } = useAuth()
  const { getMyApplications } = useRegistrationApi();

  
  const myApplyPromise = useMemo(() => {
    if (!user?.email) return Promise.resolve([]);
    return getMyApplications(user.email);
  }, [user?.email]);

  return (
    <div>
      <Suspense fallback={<h1 className="text-center text-2xl my-30">.....Loadingggg.....</h1>}>
        <MyApplyList myApplyPromise={myApplyPromise} />
      </Suspense>
    </div>
  );
};

export default MyRegistrationPage;
