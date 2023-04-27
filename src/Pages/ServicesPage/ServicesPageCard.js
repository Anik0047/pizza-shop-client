
import { useContext } from 'react';
import { AuthContext } from '../../Content/AuthProvider';

const ServicesPageCard = ({ pizza } ) => {

    const { user } = useContext(AuthContext);
    console.log(user);
    const { name, description, image, price } = pizza;
    return (
        <div className='items-center text-white'>
            <div>
                <img className='h-full' src={image} alt=''></img>
            </div>
            <div className='text-left px-5'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h1 className='my-2 text-stone-500'>{description}</h1>
                <h1>${price} <span className='ps-3'><button className="btn btn-sm btn-warning rounded-none btn-outline ps-3">Order</button></span></h1>

            </div>
        </div>
    );
};

export default ServicesPageCard;