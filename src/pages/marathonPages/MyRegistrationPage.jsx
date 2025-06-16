import React, { Suspense, use } from 'react';
import MyApplyList from './MyApplyList';
// import MarathonsRegistration from './MarathonsRegistration';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { myApplyPromise } from '../../api/registrationsApi';


const MyRegistrationPage = () => {
    const {user}=use(AuthContext)
    // const {myRegisterPromise}=useRegistrationApi()
    
    console.log('token in the context', user.accessToken)

    return (
        <div>
           <Suspense fallback={<h1 className='text-center text-2xl my-30'>...Loadingggg.....</h1>}>
             {/* <MarathonsRegistration></MarathonsRegistration> */}
             
            <MyApplyList myApplyPromise={myApplyPromise(user.email)} >
           
            </MyApplyList>
           </Suspense>
        </div>
    );
};

export default MyRegistrationPage;