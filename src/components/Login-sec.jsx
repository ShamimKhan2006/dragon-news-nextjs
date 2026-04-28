import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const LoginSec = () => {
    return (
        <div>
           <h1 className="font-medium text-center mb-2">Login With</h1>
            <div className='flex flex-col gap-2'>
                <button className= 'btn border text-blue-500 p-2'><FaGoogle></FaGoogle> Login with Goggle</button>
                <button className='btn p-2 border text-gray-500'><FaGithub></FaGithub> Login with Github</button>
            </div>
     
      </div>

    );
};

export default LoginSec; 
        