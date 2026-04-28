import Link from 'next/link';
import React from 'react';

const Leftsidebar = ({category,activeId}) => {
    return (
        <div>
             <h1 className="mb-5">All Cetagories</h1>
        <ul>
            {
            category.news_category.map(category => 
            <li  key={category.category_id} className={`${activeId === category.category_id && ' bg-stone-300'} text-center rounded-md  mb-2`}>
                <Link className='block p-2 bg-green-200 text-white' href={`/category/${category.category_id}`}>
                {category.category_name}</Link>
                </li>)
          }
        </ul>
        </div>
    );
};

export default Leftsidebar;

