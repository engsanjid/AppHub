import React from 'react';
import error from '../../assets/error-404.png'
const ErrorPage = () => {
    return (
        <div className='bg-white flex flex-col py-10 items-center text-center justify-center'>
         <img src={error} alt="" />
           <h1 className='text-2xl font-bold pt-8 text-black'>Oops, page not found!</h1>
          <p className='text-black p-3'>The page you are looking for is not available.</p>
          <button className='bg-blue-500 rounded-2xl p-2'>Go Back!</button>
        </div>
    );
};

export default ErrorPage;