
            
import Header from '@/components/Header';
import Leftsidebar from '@/components/homePage/news/Leftsidebar';
import LoginSec from '@/components/Login-sec';
import NewsCard from '@/components/NewsCard';
 import React from 'react';

 const getCetagories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data =await res.json();
  const category=data.data
  return category
};
const getNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,{
      cache: "no-store",
    },
  );
  const data =await res.json();
  const news=data.data
  return news
};

const NewsDetails =async ({params}) => {

    const {id}=await params ||{}
    const category=await getCetagories()
  const allNews=await getNews(id)
  console.log("ID:", id)
console.log("News:", allNews)
    
  
    return (
        <div>
             <div className=" container mx-auto grid grid-cols-12 my-10">
        <div className="col-span-3 text-center font-semibold">
         <Leftsidebar category={category} activeId={id}></Leftsidebar>
        </div>
        <div className="col-span-6 text-center font-semibold">
          <h1>All News</h1>
         {
          allNews?.map(item => 
            <NewsCard key={item._id} item={item}>
            </NewsCard>
          )
         }

        </div>
        <div className="col-span-3 text-center font-semibold">
          <LoginSec></LoginSec>
        </div>
      </div>
        </div>
    );
};

 export default NewsDetails;
    