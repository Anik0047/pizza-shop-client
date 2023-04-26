import React from 'react';
import '../Home/Pizza/Pizza.css';
import img1 from '../../images/person_1.jpg'
import img2 from '../../images/person_2.jpg'
import img3 from '../../images/person_3.jpg'
import img4 from '../../images/person_4.jpg'
import Time from '../Home/Time/Time';
import Welcome from '../Home/Welcome/Welcome';
import Count from '../Home/Count/Count';
import Map from '../Home/Map/Map';

const About = () => {
    return (
        <div>

            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>About</h6>
                </div>
            </div>

            <Time></Time>
            <Welcome></Welcome>

            <div className='pizzaBackground'>
                <div className='container mx-auto px-6 md:px-0 py-20'>
                    <h1 className='text-white text-3xl font-semibold'>OUR CHEF</h1>
                    <p className='text-stone-500 py-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='grid px md:grid-cols-4 gap-8'>
                        <div className='border border-yellow-700  hover:border-yellow-400  p-10'>
                            <div className='flex justify-center items-center'>
                                <img className='w-44 rounded-full' src={img1} alt=''></img>
                            </div>
                            <h1 className='pt-8 text-amber-500 text-xl font-medium'>TOM SMITH</h1>
                            <p className='py-5 text-slate-200'>Head chef</p>
                            <p className='text-slate-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='border border-yellow-700  hover:border-yellow-400  p-10'>
                            <div className='flex justify-center items-center'>
                                <img className='w-44 rounded-full' src={img2} alt=''></img>
                            </div>
                            <h1 className='pt-8 text-amber-500 text-xl font-medium'>MARK WILSON</h1>
                            <p className='py-5 text-slate-200'>Assistant chef</p>
                            <p className='text-slate-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='border border-yellow-700  hover:border-yellow-400  p-10'>
                            <div className='flex justify-center items-center'>
                                <img className='w-44 rounded-full' src={img3} alt=''></img>
                            </div>
                            <h1 className='pt-8 text-amber-500 text-xl font-medium'>PATRICK JACOBSON</h1>
                            <p className='py-5 text-slate-200'>Bartender</p>
                            <p className='text-slate-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                        <div className='border border-yellow-700  hover:border-yellow-400  p-10'>
                            <div className='flex justify-center items-center'>
                                <img className='w-44 rounded-full' src={img4} alt=''></img>
                            </div>
                            <h1 className='pt-8 text-amber-500 text-xl font-medium'>IVAN DORCHSNER</h1>
                            <p className='py-5 text-slate-200'>Helping chef</p>
                            <p className='text-slate-400'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Count></Count>
            <Map></Map>

        </div>
    );
};

export default About;