import React, { useContext } from 'react';
import { AuthContext } from '../../../Content/AuthProvider';
import Swal from 'sweetalert2';

const PizzaCard = ({ pizza }) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { name, description, image, price } = pizza;


    const orders = () => {
        const orderList = {
            email: user.email,
            orderBy: user.displayName,
            pizzaName: name,
            price: price,
            image: image
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderList)
        })
            .then(res => res.json())
            .then(data =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Pizza Order Successful',
                    showConfirmButton: false,
                    timer: 2000
                }))

    };

    return (

        <div className='grid grid-cols-2 items-center text-white'>
            <div>
                <img className='h-full' src={image} alt=''></img>
            </div>
            <div className='text-left px-5'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h1 className='my-2 text-stone-500'>{description}</h1>
                

                <div className='flex items-center'>
                    <h1>${price}</h1>
                    {
                        user?.uid &&
                        <span className='ps-3'>
                            <button onClick={() => orders()} className="btn btn-sm btn-warning rounded-none btn-outline ps-3">Order</button></span>
                    }
                    
                </div>

                
            </div>
        </div>
    );
};

export default PizzaCard;