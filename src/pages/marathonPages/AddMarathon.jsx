import React, { use, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Helmet } from "react-helmet";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddMarathon = () => {

    const { theme, setLoading } = use(AuthContext)
    const [selected, setSelected] = useState('Select Category');
    const [startRegDate, setStartRegDate] = useState(null)
    const [endRegDate, setEndRedDate] = useState(null)
    const [maratonsStartDate, setMaratonsStartDate] = useState(null)

    const handleAddMarathon = e => {
        e.preventDefault()
        const form = e.target

        const marathon = {
            title: form.title.value,
            startRegistration: startRegDate.toISOString().split("T")[0],
            endRegistration: endRegDate?.toISOString().split("T")[0],
            marathonDate: maratonsStartDate?.toISOString().split("T")[0],
            location: form.location.value,
            distance: selected,
            description: form.description.value,
            image: form.marathonsImage.value,
            createAt: new Date(),
            totalRegCount: 0
        }
        console.log(marathon)


        axios.post('http://localhost:5000/marathons', marathon)
            .then(res => {
                setLoading(true)
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Marathon has been Submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                setLoading(false)
            }).catch(error => {
                console.log(error)
            })
    }


    const handleStartRegDate = (date) => {
        setStartRegDate(date)
    }

    const handleEndRegDate = (date) => {
        setEndRedDate(date)
    }

    const handleMarathonsStartDate = (date) => {
        setMaratonsStartDate(date)
    }



    return (
        <div>
            <div className={`${theme === 'synthwave' ? 'bg-[#1e1e2f] text-white ' : 'bg-white text-black '} 
        w-8/12 mx-auto my-10 space-y-5 dancing-script-font`}>
                <Helmet>
                    <title>
                        ADD Marathon || RaceClock
                    </title>
                </Helmet>
                <div>
                    <h1 className='tagesschrift-regular text-5xl text-center mt-20'>Add Marathons </h1>
                    <p className='text-gray-500 text-center mt-4 tagesschrift-regular '>Get what you need faster from freelancers who trained their own personal AI Creation Models. Now you can browse, prompt, and generate instantly. <br /> And if you need a tweak or change, the freelancer is always there to help you perfect it.</p>
                </div>
                <form onSubmit={handleAddMarathon} className="">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* user name */}
                        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">User Name</label>
                        <input

                            name="name"
                            type="text"
                            value={user?.displayName}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-not-allowed"
                            readOnly
                        />
                    </fieldset> */}

                        {/* email */}
                        {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <label className="label"> User Email</label>
                        <input

                            name="email"
                            type="email"
                            value={user?.email}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-not-allowed"
                            readOnly
                        />
                    </fieldset> */}

                        {/* Marathon Title */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label">Marathon Title

                            </label>
                            <input

                                name="title"
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                placeholder="Marathon Title" />
                        </fieldset>

                        {/* Running Distance  */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">Running Distance </label>
                            <select
                                name="runningDistance"
                                onChange={(e) => setSelected(e.target.value)}
                                className={`p-3 fieldset rounded-lg border ${selected === 'Select Category'
                                    ? ' text-gray-500 border-gray-300 border'
                                    : ' text-black border-gray-300 border-2 focus:outline-none focus:ring-2 focus:ring-purple-300'
                                    }`}

                                required>
                                <option
                                    value=""
                                    disabled selected hidden className="text-gray-500"
                                >Select Category</option>
                                <option value="3K">3K</option>
                                <option value="5k">5k</option>
                                <option value="10k">10k</option>
                                <option value="15k">15k</option>
                                <option value="25">25</option>
                                <option value="20k">30k</option>
                                <option value="35k">35k</option>
                            </select>
                        </fieldset>

                        {/* start reg date---- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Start Registration Date</label>
                            <DatePicker
                                selected={startRegDate}
                                onChange={handleStartRegDate}
                                dateFormat="dd/MM/yyyy"
                                className="w-full border text-gray-800 font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 p-3"
                                placeholderText="Select Start registration date"
                            >
                            </DatePicker>
                        </fieldset>
                        {/* END reg date---- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 ">
                            <label className="label">End Registration Date</label>
                            <DatePicker
                                selected={endRegDate}
                                onChange={handleEndRegDate} selectsEnd
                                dateFormat="dd/MM/yyyy"
                                className="w-full border text-gray-800 font-semibold border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 p-3"
                                placeholderText="Select End registration date"
                            />
                        </fieldset>

                        {/*Marathon Start Date---- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Marathon Start Date</label>
                            <DatePicker
                                selected={maratonsStartDate}
                                onChange={handleMarathonsStartDate}
                                dateFormat="dd/MM/yyyy"
                                className="w-full border text-gray-800 font-semibold border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                placeholderText="Select Marathon Start Date"
                            />
                        </fieldset>



                        {/* Location-- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label">Location</label>
                            <input
                                name="location"
                                type="text"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                min='0'
                                placeholder='Location' />
                        </fieldset>

                    </div>

                    <div className="mt-5">

                        {/* marathons image-- */}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4 mb-5">
                            <label className="label">Marathons Image</label>
                            <input

                                name="marathonsImage"
                                type='url'
                                // type='file' 
                                // accept="image/*"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                placeholder="Marathons image"
                                required
                            ></input>

                        </fieldset>

                        {/* description --*/}
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                            <label className="label"> Description (what needs to be done)</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="5"
                                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                                placeholder="Write clearly what needs to be done..."
                                required
                            ></textarea>

                        </fieldset>

                        <input type="submit" className="btn bg-purple-200 border border-pink-200 hover:bg-white hover:text-teal-800  mt-3 w-full text-xl mb-50 fira-sans-extralight" value='Submit ' />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddMarathon;