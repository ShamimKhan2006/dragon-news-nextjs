
import React from 'react';
import Header from './Header';
import Navber from './Navber';

const NewsCard = ({item}) => {
    console.log(item , "all items")
    return (
        <div>
             
            
                <div  className='border p-2'>
                {item.title}<p></p>
              {item.rating.badge}
              
            </div>
        </div>
    );
};

export default NewsCard;