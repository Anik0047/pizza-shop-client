import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MenuCard from './MenuCard';
import '../Home/Banner/Banner.css';



const Menu = () => {

    const { data: pizza = [], refetch } = useQuery({
        queryKey: ['pizza'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/pizza');
            const data = await res.json();
            return data;
        }

    });

    return (
        <div>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>Our Menu</h6>
                </div>
            </div>

            <div className='pizzaBackground pt-28'>
                <div className='container mx-auto'>
                    <h1 className='text-white text-3xl font-semibold pb-10'>Our Menu</h1>
                    <p className='text-stone-500 pb-16 px-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className='grid md:grid-cols-2 gap-y-10'>
                        {
                            pizza.map(pizza => <MenuCard
                                pizza={pizza}
                                key={pizza._id}
                            ></MenuCard>)
                        }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Menu;