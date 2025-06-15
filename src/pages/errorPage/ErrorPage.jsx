// import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router';


const ErrorPage = () => {

    const navigate=useNavigate()

    return (
        <div className='bg-pink-100 w-full mx-auto'>
            <Navbar></Navbar>
          <div className='lg:my-60 my-20 w-full mx-auto'>
              <h1 className='lg:text-9xl md:text-4xl text-7xl text-center text-red-700 font-bold edu-nsw-act-cursive-font  p-10'>404</h1>

                <p className='text-center lg:text-2xl fira-sans-extralight'>The page you were looking for doesn't exist</p>

                <p className='text-center lg:text-2xl fira-sans-extralight'>You may have mistyped the address or the page may have moved</p>
                
              <div className='flex justify-center '>
                  <Link to={'/'}>
                  <button className='btn w-60 lg:p-6 rounded-lg mx-auto bg-purple-200 lg:text-lg font-semibold fira-sans-extralight my-5 hover:bg-white border-2 border-fuchsia-200 '>
                  <IoIosArrowRoundBack  size={50}/>Back to home
                </button>
                  </Link>
                  
              </div>
                     
              <div className='flex justify-center '>
                  <Link to={'/'}>
                  <button onClick={()=>navigate(-1)} className='btn w-80 lg:p-6 rounded-lg mx-auto bg-purple-300 lg:text-lg font-semibold fira-sans-extralight hover:bg-white border-2 border-pink-200 '>
                  <IoIosArrowRoundBack  size={50}/>Back to previous page
                </button>
                  </Link>
                  
              </div>
             

          </div>


            <Footer ></Footer>
        </div>
    );
};

export default ErrorPage;