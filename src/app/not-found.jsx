import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center mt-100'>
            <h1 className='font-bold text-4xl text-red-600'>This page is not Found</h1>
            <Link href="/">
            <button className='btn btn-primary mt-5'>Back to Home</button>
            </Link>
        </div>
    );
};
export default NotFound;