import React from 'react';
import { useNavigate } from 'react-router';
import notFound from '../../assets/App-Error.png'
const NotFoundApp = () => {
    const nav = useNavigate();
    return (
        <div>
            <div className='bg-white flex flex-col py-10 items-center text-center justify-center'>
                  <img src={notFound} alt="Not Found App" />
                  <h1 className='text-2xl font-bold pt-8 text-black'>OPPS!! APP NOT FOUND</h1>
                  <p className='text-black p-3'>The App you are requesting is not found on our system.  please try another apps</p>
                  <button onClick={() => nav(-1)} className='bg-blue-500 text-white rounded-2xl px-4 py-2'>Go Back!</button>
                </div>
        </div>
    );
};

export default NotFoundApp;