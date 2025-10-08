import React, { Suspense } from 'react';

import SingleApp from './SingleApp';
import { Link } from 'react-router';

const TrendingApps = ({data}) => {

// const [trendingApps,setTrendingApps]=useState([]);
//  useEffect(()=>{
//     fetch('TrendingApps.json')
//     .then(res=>res.json())
//     .then(data=>{
//         setTrendingApps(data)
//     })
//  },[])
 
    return (
        <div className='bg-[#f7f9fb] p-[80px] gap-[40px] flex flex-col'>
        <div className='text-black flex flex-col justify-center items-center text-center gap-[16px]'>
            <h1 className='font-bold text-[48px] text-2xl'>Trending Apps</h1>
            <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='flex flex-col text-center gap-[40px]'>
            <div>
                <Suspense fallback={<span>loading.......</span>}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
             {
                 data.map((singleApp)=><SingleApp key={singleApp.id} singleApp={singleApp}></SingleApp>)
             }
            </div>
            </Suspense>
            </div>
            <div className=''>
              <Link to='/app'><button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center p-4 rounded-2xl'>Show All</button></Link>
            </div>
        </div>
        </div>
    );
};

export default TrendingApps;