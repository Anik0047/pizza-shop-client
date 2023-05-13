import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PizzaCard from './PizzaCard';
import './Pizza.css';

const Pizza = () => {

    const { data: pizza = [], refetch } = useQuery({
        queryKey: ['pizza'],
        queryFn: async () => {
            const res = await fetch('https://server-dun-mu.vercel.app/pizza');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div className='pizzaBackground pt-28'>
            <h1 className='text-white text-3xl font-semibold pb-10'>HOT PIZZA MEALS</h1>
            <p className='text-stone-500 pb-16 px-10'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='grid md:grid-cols-3'>
                {
                    pizza.map(pizza => <PizzaCard
                        pizza={pizza}
                        key={pizza._id}
                    ></PizzaCard>)
                }
            </div>
        </div>
    );
};

export default Pizza;