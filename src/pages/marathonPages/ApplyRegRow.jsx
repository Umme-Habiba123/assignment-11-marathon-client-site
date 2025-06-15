import React from 'react';

const ApplyRegRow = ({myApply,index}) => {

    const {firstName,lastName,email, additionalInfo,marathonsTitle,marathonDate}=myApply
    return (
            <tr>
                <th>
                    {index+1}
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                           
                        </div>
                        <div>
                            <div className="font-bold">{firstName} {lastName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                   <h2>{additionalInfo}</h2>
                    <br />
                    {/* <span className="badge badge-ghost badge-sm">{additionalInfo}</span> */}
                </td>
             <p className='ml-9 mt-4 edu-nsw-act-cursive-font font-semibold'>{new Date(marathonDate).toISOString().split("T")[0]}</p>
            <h2 className='ml-5 my-2'>{marathonsTitle}</h2>
                
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
           
       
    );
};

export default ApplyRegRow;