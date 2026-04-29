import React from "react";

import Image from "next/image";
import { IoEyeOutline, IoShareSocialOutline } from "react-icons/io5";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import Link from "next/link";

const NewsCard = ({ item }) => {
  console.log(item, "all items");
  return (
    <div className="container mx-auto bg-base-200 shadow-sm">

       <div className="bg-slate-100  p-4 flex justify-between items-center ">
        <div className="flex gap-4">
            <Image                                                                                                     
          src={item.author?.img}
          alt="pic"
          width={50}
          height={50}
          className="rounded-full"
        ></Image>
        <div className="text-left">
        <h3 className="font-bold" >{item.author.name}</h3>
        <p className="text-gray-400 font-small">{item.author.published_date}</p>
       
      </div>
        
        </div>

         <div className="flex gap-3  items-center">
        <CiBookmarkCheck className="w-7 h-7"  />
        <IoShareSocialOutline className="w-6 h-6" />
      </div>


       </div>
    

       <div className="card bg-base-100">
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            
          </div>
          <figure>
            <Image
              src={item?.image_url}
              alt="Shoes"
              width={700}
              height={700}
            
            />
          </figure>
          <p className="m-5 line-clamp-3 text-left">{item.details}</p>
          <Link href={`/news/${item._id}`}> <button className="btn ">See Details</button></Link>
          <div className="flex justify-between items-center gap-3 mx-6 my-2">
           <div className="flex gap-2 items-center">
             <IoMdStar className="text-yellow-400 w-6 h-6" />
            <p>{item.rating.number}</p>
           </div>
            <div className="flex gap-2 items-center">
                <IoEyeOutline className="text-gray-600   w-6 h-6" />
                <p>{item.total_view}</p>
            </div>
            

          </div>
        </div>
       
        
    </div>
  );
};

export default NewsCard;
