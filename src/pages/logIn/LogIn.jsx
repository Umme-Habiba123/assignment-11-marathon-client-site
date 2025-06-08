import React, { use } from 'react';
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import lottieLogin from '../../assets/login-lottie-files.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const LogIn = () => {
    const {signInUser ,}=use(AuthContext)

    const handleLogIn = e => {
        e.preventDefault()

        const form =e.target;
   const password=form.password.value;
   const email=form.email.value
       
        // signIn user----
        signInUser(email,password)
        .then(result=>{
            console.log(result)
        }).catch(error=>{
            console.log(error)
        })
    }
  



    return (
        <div className='m-10 w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-10'>

              <div className='w-[250px] md:w-[300px] lg:w-[400px] mx-auto' >
                    <Lottie animationData={lottieLogin} loop={true}></Lottie>
                </div>

            <div className='w-full max-w-md '>
                <form
                onSubmit={handleLogIn} className=" bg-white shadow-md rounded-xl p-6 space-y-5">

                <h2 className="text-2xl font-bold text-center text-purple-600">LogIn</h2>

                <div>
                    <label className="block mb-1 font-medium text-gray-500">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-500">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        required
                    />
                </div>
                <Link to={'/'}>
                    <p className='text-center mb-5 text-blue-600 font-semibold'>Forgot Password ? </p>
                </Link>
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
                >
                    LogIn
                </button>

                <p className='text-gray-500 text-center'>Don't have an account ?
                    <Link to={'/register'}>
                        <span className='text-blue-700 underline'> Register</span>
                    </Link> </p>

                <h1 className='text-center text-gray-400'>------ OR ------</h1>

                <button className='flex btn w-full text-gray-400 text-lg'><FcGoogle size={25} />Login with Facebook</button>

               
            </form>
            </div>        
        </div>
    );
};

export default LogIn;