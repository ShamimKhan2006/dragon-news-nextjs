import Header from '@/components/Header';
import Navber from '@/components/Navber';


import React from 'react';




const Mainlayout = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            
         
            {children}

        </div>
    );
};

export default Mainlayout;