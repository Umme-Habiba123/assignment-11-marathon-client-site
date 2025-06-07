import React from 'react';
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";


const Register = () => {
    return (
        <div className='m-30 fira-sans-extralight'>
            <form className="w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-5">
  <h2 className="text-2xl font-bold text-center text-purple-600">Register</h2>

  <div>
    <label className="block mb-1 font-medium text-gray-700">Full Name</label>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium text-gray-700">Password</label>
    <input
      type="photoURL"
      name="photoURL"
      placeholder="Your Photo"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
      required
    />
  </div>

  <div>
    <label className="block mb-1 font-medium text-gray-700">Password</label>
    <input
      type="password"
      name="password"
      placeholder="••••••••"
      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
      required
    />
  </div>
  <Link to={'/'}>
  <p className='text-center mb-5 text-blue-600 font-semibold'>Forgot Password ?</p>
  </Link>
  <button
    type="submit"
    className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
  >
    Register
  </button>

  <p className='text-gray-500 text-center'>Already have an account ? <span className='text-blue-700 underline'>Login</span> </p>

  <h1 className='text-center text-gray-400'>------ OR ------</h1>

  <button className='flex btn w-full'><FaFacebook />Login with Facebook</button>

  
</form>


        </div>
    );
};

export default Register;