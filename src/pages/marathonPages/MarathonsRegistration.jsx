import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import { format } from "date-fns";



const MarathonsRegistration = () => {
    const marathon=useLoaderData()
    console.log(marathon)
    const { user } = use(AuthContext)
    const { id } = useParams()

    // const [marathons, setMarathons] = useState(null)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        additionalInfo: "",
    })

    const handleSubmit = e => {
        e.preventDefault()

        const registration = {
            email: user.email,
            marathonId: id,
            marathonsTitle:marathon.title,
            marathonDate: marathon.marathonDate,
            ...formData,
            registredAt:new Date()
        }
        console.log("Registration Data:", registration)

    }


    const isRegistrationOpen = () => {
        if (!marathon) return false
        const today = new Date()
        const start = new Date(marathon.startRegistration)
        const end = new Date(marathon.endRegistration)

        return start <= today && today <= end
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }


    return (
        <div className='w-8/12 mx-auto my-20 bg-gray-100 p-20 rounded'>
            <p className='text-3xl mb-8 text-center edu-nsw-act-cursive-font font-bold'>Register Now for the Marathon!</p>
            <form
                onSubmit={handleSubmit}
                className="space-y-4">

                {/* Email-----  */}
                <input
                    type="email"
                    name='email'
                    value={user?.email || ""}
                    readOnly
                    className="w-full p-2  border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* Marathon Title - Readonly */}
                <input
                    type="text"
                    value={marathon?.title || ''}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* Marathon Date - Readonly */}
                <input
                    type="text"
                    value={format(new Date(marathon.marathonDate), "yyyy-MM-dd")}
                    readOnly
                    className="w-full p-2 border border-gray-300 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* First Name */}
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* Last Name */}
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* Contact Number */}
                <input
                    type="tel"
                    name="contactNumber"
                    onChange={handleChange}
                    placeholder="Contact Number"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                />

                {/* Additional Info */}
                <textarea
                    name="additionalInfo"
                    onChange={handleChange}
                    placeholder="Additional Info (Optional)"
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-300"
                ></textarea>

                {/* Submit Button */}
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

export default MarathonsRegistration;