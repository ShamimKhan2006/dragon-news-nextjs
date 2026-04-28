import React from 'react';
import logo from "../assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
     const latestNews = [
  {
    title: "Shooting incident at Washington gala shocks world leaders",
    category: "World",
    date: "2026-04-26",
    summary: "A gunman attacked a high-profile media event attended by Donald Trump. No casualties were reported, and the suspect is in custody.",
    source: "Daily Star",
  },
  {
    title: "Trump cancels Pakistan trip for Iran talks",
    category: "Politics",
    date: "2026-04-26",
    summary: "US President Donald Trump canceled a planned delegation visit to Pakistan for negotiations with Iran, increasing uncertainty around peace talks.",
    source: "Xinhua / ABC",
  },
  {
    title: "Middle East tensions push oil prices above $100",
    category: "Economy",
    date: "2026-04-25",
    summary: "Ongoing conflict and disruptions in the Strait of Hormuz have driven oil prices to multi-year highs, affecting global inflation.",
    source: "The Guardian",
  },
  {
    title: "Global economic pressure rises due to war",
    category: "Economy",
    date: "2026-04-22",
    summary: "Fuel price increases linked to Middle East conflict are raising inflation and economic risks worldwide.",
    source: "The Guardian",
  },
  {
    title: "NATO tensions increase over Iran war stance",
    category: "Politics",
    date: "2026-04-25",
    summary: "Disagreements between the US and European allies over involvement in the Iran war are creating divisions within NATO.",
    source: "Al Jazeera",
  },
  {
    title: "World Snooker Championship 2026 heats up",
    category: "Sports",
    date: "2026-04-25",
    summary: "Top players including Ronnie O’Sullivan are competing as the tournament progresses toward the finals.",
    source: "TechRadar / The Sun",
  }
];
    return (
        <>
        <div className='text-center mt-10 p-4 space-y-2'>
            <Image src={logo} width={400} height={300} alt='logo' className='mx-auto'></Image>
            <p className='font-medium'>Journalism Without Fear or Favour</p>
            <p>
                {format(new Date(), 'EEE MMM dd,yyyy')}</p>
        </div>
        <div>
              <div className='container mx-auto bg-gray-200 p-4 flex justify-between items-center gap-4'>
           <div className='flex'>
             <button className='bg-red-500 text-white font-medium  p-3 py-2'>Latest</button>
           </div>
            <Marquee pauseOnHover={true} speed={100}>
               {
               latestNews.map(news =>(<span key={news.id}>{news.title}</span>))
               }
            </Marquee>
        </div>
        </div>


        
        </>
    );
};

export default Header;