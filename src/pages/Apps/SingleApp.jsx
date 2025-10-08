import React from 'react';
import { Star } from 'lucide-react';
import { Download } from 'lucide-react';
import { Link } from 'react-router';
const SingleApp = ({singleApp}) => {
 const {image,ratingAvg
,title,id
,downloads
}=singleApp;
  return (
    <>
     
   <Link to={`/appDetails/${id}`}>
    <div className="card shadow-sm w-full overflow-hidden">
  <figure className='w-full h-56'>
    <img className="w-full h-full object-cover" 
    src={image}
      alt=" " />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
   
    <div className="card-actions justify-between">
      <div className="badge badge-outline text-[#00D390] bg-[#F1F5E8] "><Download />{downloads}</div>
      <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1]"><Star />{ratingAvg}</div>
    </div>
  </div>
</div>
   </Link>
      
    </>
  )
}


export default SingleApp;