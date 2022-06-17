import React from 'react';

export default function Body () {
    return (
        <div className='text-center text-white'>
         <img className='' src='/assets/header.png' /> 
         {/* motion-reduce:animate-ping */}
         <img className='mx-auto' src='/assets/Ellipse.svg'  />
         <h1>Lorem ipsum</h1>
         <div>Created by: <span className='text-red-500'>Lorem ipsum</span></div>
         <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</div>
         <div className='flex w-50 justify-around my-10'>
             <div className='bg-black px-10 py-5 inline-flex'>
                 <img className="h-5" src='/assets/score.png' />
                 Lorem ipsum
             </div>
             <div className='bg-black px-10 py-5 inline-flex'>
                 <img className="h-5" src='/assets/options.png' />
                 Lorem ipsum
             </div>
             <div className='bg-black px-10 py-5 inline-flex'>
                 <img className="h-5" src='/assets/open.png' />
                 Lorem ipsum
             </div>
         </div>
        </div>
    );
}