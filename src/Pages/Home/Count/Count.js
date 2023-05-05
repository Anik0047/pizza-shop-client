import React from 'react';
import './Count.css';
import img from '../../../images/pizza.png';
import img1 from '../../../images/medal (1).png';
import img2 from '../../../images/laugh.png';
import img3 from '../../../images/chef.png';
import CountUp from 'react-countup';

const Count = () => {
    return (
        <div className='background flex justify-center items-center'>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <img className='w-24 p-5 border-2 border-yellow-400' src={img} alt=''></img>
                        </div>
                        <h1 className='text-yellow-400 text-3xl font-semibold py-0 md:py-5'><CountUp end={100} duration={8}></CountUp></h1>
                        <p className='text-white font-semibold'>Pizza Branches</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <img className='w-24 p-5 border-2 border-yellow-400' src={img1} alt=''></img>
                        </div>
                        <h1 className='text-yellow-400 text-3xl font-semibold py-0 md:py-5'><CountUp end={85} duration={8}></CountUp></h1>
                        <p className='text-white font-semibold'>Number of Awards</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <img className='w-24 p-5 border-2 border-yellow-400 ' src={img2} alt=''></img>
                        </div>
                        <h1 className='text-yellow-400 text-3xl font-semibold py-0 md:py-5'><CountUp end={10567} duration={8}></CountUp></h1>
                        <p className='text-white font-semibold'>Happy Customer</p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <div className='flex justify-center items-center'>
                            <img className='w-24 p-5 border-2 border-yellow-400 ' src={img3} alt=''></img>
                        </div>
                        <h1 className='text-yellow-400 text-3xl font-semibold py-0 md:py-5'><CountUp end={900} duration={8}></CountUp></h1>
                        <p className='text-white font-semibold'>Staff</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;