import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../../Content/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/myOrders?email=${user?.email}`;

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {}
            });
            const data = await res.json();
            return data
        }
    })

    //Check
    return (
        <>
            <h1 className='text-3xl p-8'>MY ORDERS</h1>
            <div className='grid gap-5 sm:grid-cols-1 md:grid-cols-2 sm: px-8 md:px-5'>
                {
                    products?.map(product =>
                        <div key={product._id} className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl my-10 border-2 border-gray-500">
                            <figure className='w-full lg:w-2/4'><img src={product.image} alt="Movie" /></figure>
                            <div className="card-body w-full lg:w-2/4">
                                <h2 className="card-title text-2xl">{product.pizzaName}</h2>
                                
                                <hr />
                                <p className='mt-3 text-left'>Price: $ {product.price}
                                    <br />
                                    <br />
                                </p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary rounded-lg">PAY NOW</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default MyOrders;