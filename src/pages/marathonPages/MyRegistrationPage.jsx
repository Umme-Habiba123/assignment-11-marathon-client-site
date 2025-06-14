import React, { Suspense } from 'react';
import MyApplyList from './MyApplyList';
import MarathonsRegistration from './MarathonsRegistration';

// const myAppyPromise=(email)=>{
//    return fetch(``)(res=>res.json())
//  }

const MyRegistrationPage = () => {
    return (
        <div>
           <Suspense fallback={'...Loadingggg.....'}>
             <MarathonsRegistration></MarathonsRegistration>
            <MyApplyList></MyApplyList>
           </Suspense>
        </div>
    );
};

export default MyRegistrationPage;