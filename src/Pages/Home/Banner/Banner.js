import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>welcome</h6>
                    <h2 className='py-5'>WE COOKED YOUR DESIRED</h2>
                    <h2 className='pb-7'>PIZZA RECIPE</h2>
                    <p className='text-lg pb-5'>A small river named Duden flows by their place and supplies it with the necessary regeilalia</p>
                    <button className="btn btn-warning rounded-none btn-outline">View Menu</button>
                </div>
            </div>
        </>
    );
};

export default Banner;