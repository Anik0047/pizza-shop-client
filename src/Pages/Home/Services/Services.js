import React from 'react';
import './Services.css';
import img1 from '../../../images/diet.png'
import img2 from '../../../images/bike.png'
import img3 from '../../../images/pizza (1).png'

const Services = () => {
    return (
        <div className='bg-1 py-20 text-black'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-semibold mb-5'>Our Services</h1>
                <p className='mb-14 px-7'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                    live the blind texts.</p>
                <div class="grid grid-cols-1 md:grid-cols-3">
                    <div className='items-center'>
                        <img alt='' className='w-14 mx-auto mb-5' src={img1}></img>
                        <h3 className="font-semibold mb-5">Healthy Foods</h3>
                        <p className='px-14'>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic.</p>
                    </div>
                    <div className='items-center py-8 md:py-0'>
                        <img alt='' className='w-14 mx-auto mb-5' src={img2}></img>
                        <h3 className="font-semibold mb-5">Fastest Delivery</h3>
                        <p className='px-14'>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic.</p>
                    </div>
                    <div className='items-center'>
                        <img alt='' className='w-14 mx-auto mb-5' src={img3}></img>
                        <h3 className="font-semibold mb-5">Original Recipes</h3>
                        <p className='px-14'>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;