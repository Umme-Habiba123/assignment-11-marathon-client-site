import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { LuEyeClosed } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";
import regLottie from '../../assets/registration-lottiApi.json'
import Lottie from 'lottie-react';

const Register = () => {

  const { createUser, setUser, user, showPassword, setShowPassword, updatedUser} = use(AuthContext)
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
    createUser(email, password, photoURL, name)
      .then(result => {
        Swal.fire({
          title: "Successfully Registered!",
          icon: "success",
          draggable: true
        });
        updatedUser({
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          setUser({
            ...user, displayName: name,
            photoURL: photoURL
          })
        }).catch(error => {
          console.log(error)
        })
        navigate(location?.state || '/')
        console.log(result)
      }).catch(error => {
        console.log(error)
        setUser(user)
      })

  }


  return (
    
  <div className='min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 bg-gray-50'>
  <div className='flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl'>


    <div className='w-[250px] md:w-[350px] lg:w-[450px]'>
      <Lottie animationData={regLottie} loop={true} />
    </div>

  
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-5"
    >
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
          type="text"
          name="photoURL"
          placeholder="Your Photo URL"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
      </div>

      <div className='relative'>
        <label className="block mb-1 font-medium text-gray-500">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="••••••••"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-10 text-gray-500'
        >
          {showPassword ? <RxEyeOpen size={25} /> : <LuEyeClosed size={25} />}
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
      >
        Register
      </button>

      <p className='text-gray-500 text-center'>
        Already have an account?
        <Link to="/logIn">
          <span className='text-blue-700 underline ml-1'>Login</span>
        </Link>
      </p>
    </form>
  </div>
</div>

  );
};

export default Register;