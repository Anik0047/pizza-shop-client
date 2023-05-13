import React from 'react';
import '../Home/Banner/Banner.css';
import Services from '../Home/Services/Services';
import { BiStop } from "react-icons/bi";
import { useQuery } from '@tanstack/react-query';
import ServicesPageCard from './ServicesPageCard';

const ServicesPage = () => {

    const { data: pizza = [], refetch } = useQuery({
        queryKey: ['pizza'],
        queryFn: async () => {
            const res = await fetch('https://server-dun-mu.vercel.app/pizza');
            const data = await res.json();
            return data;
        }
    });


    return (
        <div>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>Services</h6>
                </div>
            </div>

            <Services></Services>

            <div className='pizzaBackground py-28'>
                <div className='container mx-auto'>
                    <h1 className='text-white text-3xl font-semibold pb-3'>HOT PIZZA</h1>
                    <div className='flex justify-center items-center text-amber-500 pb-5'>
                        <BiStop className='text-2xl rotate-45'></BiStop>
                        <BiStop className='text-3xl rotate-45'></BiStop>
                        <BiStop className='text-2xl rotate-45'></BiStop>
                    </div>
                    <p className='text-stone-500 pb-16 px-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                    <div className='grid md:grid-cols-6'>
                        {
                            pizza.map(pizza => <ServicesPageCard
                                pizza={pizza}
                                key={pizza._id}
                            ></ServicesPageCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;