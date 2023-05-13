import React, { useContext } from 'react';
import { AuthContext } from '../../Content/AuthProvider';
import Swal from 'sweetalert2';

const MenuCard = ({ pizza }) => {
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
        fetch('https://server-dun-mu.vercel.app/order', {
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
        <div className='text-white'>
            <div>
                <div>
                    <img className='w-3/4 md:w-2/4 mx-auto' src={image} alt=''></img>
                </div>
                <div className='px-5'>
                    <h1 className='text-xl font-semibold my-5'>{name}</h1>
                    <h1 className='my-2 text-stone-500 px-8 md:px-32'>{description}</h1>
                    <h1 className='mt-5'>${price} <span className='ps-3'><button onClick={() => orders()} className="btn btn-sm btn-warning rounded-none btn-outline ps-3">Order</button></span></h1>

                </div>
            </div>
        </div>
    );
};

export default MenuCard;