import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { LuEyeClosed } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";


const Register = () => {

  const { createUser,showPassword,setShowPassword } = use(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleRegister = e => {
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const email = form.email.value
    const photoURL = form.photoURL.value

    console.log(name, email, password, photoURL)


    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const isLong = password.length >= 6

    if (!hasUpperCase) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Must have an Uppercase letter in the password",

      });
      return
    }
    if (!hasLowerCase) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "Must have a Lowercase letter in the password",

      });
      return
    }
    if (!isLong) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long",

      });
      return
    }

    //  createUser-----
    createUser(email, password,photoURL,name)
      .then(result => {
        Swal.fire({
          title: "Successfully Registered!",
          icon: "success",
          draggable: true
        });
        navigate(location?.state || '/')
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='m-30 fira-sans-extralight'>
      <form
        onSubmit={handleRegister} className="w-full max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-5">
        <h2 className="text-2xl font-bold text-center text-purple-600">Register</h2>

        <div>
          <label className="block mb-1 font-medium text-gray-500">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-500">PhotoURL</label>
          <input
            type="photoURL"
            name="photoURL"
            placeholder="Your Photo"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

     
          <div className='relative'>
            <label className="block mb-1 font-medium text-gray-500 ">Password</label>
            <div>
              <input
                type={showPassword? 'text': 'password'}
                name="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 relative"
                required
              />

              <button onClick={()=>{setShowPassword(!showPassword)}}
              className='cursor-pointer absolute right-3 mt-2'>
                {
                  showPassword? <RxEyeOpen  size={25}/> : <LuEyeClosed size={25}/> 
                }
              </button>
              
            </div>
        </div>

        <button
          type="button"
          className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
        >
          Register
        </button>

        <p className='text-gray-500 text-center'>Already have an account ?

          <Link to={'/logIn'}>
            <span className='text-blue-700 underline'> Login</span>
          </Link> </p>

        <h1 className='text-center text-gray-400'>------ OR ------</h1>

        <button type='button' className='flex btn w-full text-gray-400 text-lg'><FcGoogle size={25} />Login with Facebook</button>

      </form>

    </div>
  );
};

export default Register;