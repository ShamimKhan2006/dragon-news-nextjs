import Header from "@/components/Header"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"


  const getNewDetails=async(id)=>{
  
    const res=await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
    const data=await res.json()
    const newsData=data.data
    return newsData
  }
const NewsPageDetails =async ({params}) => {
 
  <Header></Header>
    const {id}=await params 
    console.log('params',id)
    const details= await getNewDetails(id)
  
       
    return (
        <div className="mx-auto max-w-4xl">
           {
            details.map( item =><div key={item._id}>
                  <h1 className=" text-left font-semibold">Dragon news</h1>
               <div className="mx-auto max-w-4xl  shadow-sm my-10">
               
       <div className="card bg-base-100 mt-5">
          <figure>
            <Image
              src={item?.image_url}
              alt="Shoes"
              width={850}
              height={700}
              className="mt-5"
            
            />
          </figure>
           <h1 className="text-left text-3xl font-bold mx-5 mt-2">{item.title}</h1>
          <p className="m-5  text-left">{item.details}</p>
          <Link href={`/category/${item.category_id}`}> <button className="btn btn-error mx-5"><BiArrowBack></BiArrowBack> All news in the category</button></Link>
          <div className="flex justify-between items-center gap-3 mx-6 my-2">
          
            
            

          </div>
        </div>
       
        
    </div>                   
            </div>
                )
           }
        </div>
    );
};

export default NewsPageDetails;