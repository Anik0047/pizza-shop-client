import React from 'react';
import '../Home/Banner/Banner.css';
import Services from '../Home/Services/Services';

const ServicesPage = () => {
    return (
        <div>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>Services</h6>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesPage;