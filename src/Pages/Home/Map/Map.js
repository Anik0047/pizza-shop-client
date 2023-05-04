import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Map = () => {


    const { register, handleSubmit, reset } = useForm();


    const contactinfo = data => {
        const contactDetails = {
            fullName: data.firstName,
            lastName: data.lastName,
            message: data.message
        }
        fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactDetails)
        })
            .then(res => res.json())
            .then(data =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successful',
                    showConfirmButton: false,
                    timer: 2000
                }))
        reset();
    };



    return (
        <div className='grid md:grid-cols-2 text-white'>
            <div className='order-2 md:order-1'> <iframe className='w-full h-full' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=hemsen%20lane%20Chittagong+(Pizza)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
            <div className='bg-black py-10 order-1 md:order-2'>
                <h1 className=' text-2xl'>Contact Us</h1>
                <form onSubmit={handleSubmit(contactinfo)}>
                    <div>
                        <input {...register("firstName")} type="text" placeholder="First Name" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black e my-8" />
                    </div>
                    <div>
                        <input {...register("lastName")} type="text" placeholder="Last Name" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black" />
                    </div>
                    <div>
                        <input {...register("message")} type="text" placeholder="Message" className="input w-1/2 border border-0 border-b-4 border-indigo-500 bg-black my-8" />
                    </div>
                    <input className="btn btn-warning rounded-none btn-outline" type="submit" value="Send" />
               </form>
            </div>
        </div>
    );
};

export default Map;