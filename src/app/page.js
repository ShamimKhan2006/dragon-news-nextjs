
import Header from "@/components/Header";
import Leftsidebar from "@/components/homePage/news/Leftsidebar";
import LoginSec from "@/components/Login-sec";
import Navber from "@/components/Navber";
import NewsCard from "@/components/NewsCard";

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
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data =await res.json();
  const news=data.data
 
  return news
};
export default async function Home() {
  <Navber></Navber>
  const category=await getCetagories()
  const allNews=await getNews("01")
  return (
    <div>
    <Header></Header>
              <Navber></Navber>
            

      <div className=" container mx-auto grid grid-cols-12 my-10">
        <div className="col-span-3 text-center font-semibold">
         <Leftsidebar category={category} activeId={null}></Leftsidebar>
        </div>
        <div className="col-span-6 text-center font-semibold">
          <h1>All News</h1>
         {
          allNews?.map(item => 
            <div className="border  " key={item._id}>
              {item.title}<p></p>
              {item.rating.badge}
            </div>
          )
         }

        </div>
        <div className="col-span-3 text-center font-semibold">
          <LoginSec></LoginSec>
        </div>
      </div>
    </div>
  );
}
