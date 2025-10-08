import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import SingleApp from './SingleApp';
import SingleApps from './SingleApps';

const Apps = () => {
    const data1=useLoaderData();
    return (
        <div className='bg-[#f7f9fb] p-[80px] gap-[40px] flex flex-col'>
        <div className='text-black flex flex-col justify-center items-center text-center gap-[16px]'>
            <h1 className='font-bold text-[48px] text-2xl'>Our All Applications</h1>
            <p>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>
        <div className='flex flex-col text-center gap-[40px]'>

            <div>
                <Suspense fallback={<span>loading.......</span>}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
             {
                 data1.map((singleApp1)=><SingleApps key={singleApp1.id} singleApp1={singleApp1}></SingleApps>)
             }
            </div>
            </Suspense>
            </div>
        </div>
        </div>
    );
};

export default Apps;