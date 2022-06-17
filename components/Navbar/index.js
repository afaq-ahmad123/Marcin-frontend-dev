import React from 'react';

export default function Navbar() {
    return (
        <nav className='flex items-stretch justify-around bg-black py-10 pl-10'>
            <img src='/assets/logo.svg' width={200} height={70} alt='Frontier Logo' />
            <span className="flex bg-gray-800 rounded-md w-1/3 h-10 placeholder:font-italic drop-shadow-md py-2 pl-3 pr-10">
                <img src='/assets/Vectorsearch.svg' alt="search icon" width={20} height={20} />
                {/* <SearchComponent /> */}
                <input className="bg-gray-800 focus:outline-none text-white pl-6" placeholder='Lorem ipsum'  type="text" />
            </span>
            
            {/* <input className='bg-gray-800 rounded-md w-1/3 h-10' placeholder='Lorem ipsum' /> */}
            <div className="flex items-stretch space-x-4">
                <ul className='text-white'>Lorem </ul>
                <ul className='text-white'>Lorem </ul>
                <ul className='text-white'>Lorem </ul>
            </div>
        </nav>
    );
};
