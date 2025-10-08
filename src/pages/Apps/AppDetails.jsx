import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import RatingsChart from './Recharts';

const AppDetails = () => {
    const {id}=useParams();
    const appId=parseInt(id);
    const data=useLoaderData();
    const singleapp=data.find(app=>app.id===appId);
    const {image,title,companyName,description,reviews,ratingAvg,downloads,ratings,size}=singleapp;
    return (
        <section className='p-[80px] bg-white text-black'>
            <div className='flex flex-row gap-[40px]'>
                <img className="w-[350px] h-[350px]" src={image} alt="" />
                <div className='flex flex-col gap-[30px] w-[350px] h-[350px]'>
                    <div>
                        <h1 className='font-bold w-[1050px] text-[#001931] h-[39px]'>{title}</h1>
                        <p>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>
                    </div>
                    <div className='border-1 border-blue-200'></div>
                    <div className='grid grid-cols-3 gap-[24px]'>
                        <div className='flex flex-col'>
                            <span className='text-[#00D390]'><Download /></span>
                            <span>Downloads</span>
                            <span>{downloads}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span ><Star className='text-[#FF8811]'/></span>
                            <h1>Average Ratings</h1>
                            <span>{ratingAvg}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className=''><ThumbsUp className='text-[#632EE3] '/></span>
                            <span>Total Reviews</span>
                            <span>{reviews}</span>
                        </div>
                        
                    </div>
                    <button className="btn btn-active btn-success text-white">Install Now ({size})</button>
                </div>
            </div>
            <div className='border-1 border-blue-200 my-[40px]'></div>
            <div>
                <h1 className='font-bold w-[1050px] text-[#001931] h-[39px]'>Ratings</h1>
       <RatingsChart ratings={ratings} />  
                
            </div>
            <div className='border-1 border-blue-200 my-[40px]'></div>
            <div className='gap-10'>
                <h1 className='font-bold w-[1050px] text-[#001931] h-[39px] '>Description</h1>
                  <p>{description}</p>
            </div>
        </section>
    );
};

export default AppDetails;