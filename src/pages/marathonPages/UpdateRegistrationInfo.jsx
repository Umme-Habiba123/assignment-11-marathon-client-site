import React from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { MdModeEditOutline } from "react-icons/md";
import { useLoaderData } from 'react-router';

const UpdateRegistrationInfo = () => {

    const {firstName, lastName, email, additionalInfo,marathonsTitle, marathonDate,title, }=useLoaderData()


    //    const updateApplyInfo=()=>{

    //    }
           const handleUpdate = e => {
       e.preventDefault()
    }

    return (
         <div className='w-8/12 mx-auto my-20 bg-gray-100 p-20 rounded'>
                   <p className='text-3xl mb-8 text-center edu-nsw-act-cursive-font font-bold'>Register Now for the Marathon!</p>
                   <form
                       onSubmit={handleUpdate}
                       className="space-y-4">
       
                       {/* Email-----  */}
                       <input
                           type="email"
                           name='email'
                           defaultValue={email}
                           value={user?.email || ""}
                           readOnly
                           className="w-full cursor-not-allowed p-2  border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* Marathon Title---- Readonly */}
                       <input
                           type="text"
                           value={marathon?.title || ''}
                           readOnly
                            defaultValue={marathon?.title || ''}
                           className="w-full cursor-not-allowed p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* Marathon Date----- Readonly */}
                       <input
                           type="text"
                            defaultValue={format(new Date(marathon.marathonDate), "yyyy-MM-dd")}
                           value={format(new Date(marathon.marathonDate), "yyyy-MM-dd")}
                           readOnly
                           className="w-full cursor-not-allowed p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* First Name------- */}
                       <input
                           type="text"
                           name="firstName"
                           defaultValue={firstName}
                           onChange={handleChange}
                           placeholder="First Name"
                           required
                           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* Last Name ----------*/}
                       <input
                           type="text"
                           name="lastName"
                           defaultValue={lastName}
                           onChange={handleChange}
                           placeholder="Last Name"
                           required
                           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* Contact Number--------- */}
                       <input
                           type="tel"
                           name="contactNumber"
                            defaultValue={contactNumber}
                           onChange={handleChange}
                           placeholder="Contact Number"
                           required
                           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                       />
       
                       {/* Additional Info -----------*/}
                       <textarea
                           name="additionalInfo"
                           onChange={handleChange}
                           placeholder="Additional Info (Optional)"
                           className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                       ></textarea>
       
                       {/* Submit Button---------- */}
                       <button
                           type="submit"
                           disabled={!isRegistrationOpen()}
                           className={`w-full py-2 px-4 text-white font-semibold rounded ${isRegistrationOpen()
                               ? "bg-blue-600 hover:bg-blue-700"
                               : "bg-gray-400 cursor-not-allowed"
                               }`}
                       >
                           {isRegistrationOpen() ? "Submit Registration" : "Registration Closed"}
                       </button>
                   </form>
       
       
               </div>
    );
};

export default UpdateRegistrationInfo;