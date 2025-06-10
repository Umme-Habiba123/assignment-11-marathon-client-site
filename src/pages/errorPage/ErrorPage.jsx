import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-6xl text-center text-red-700 font-bold my-50'>Error 404</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;