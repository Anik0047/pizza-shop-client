import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {

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
        <div>
            <div className='w-full h-screen text-5xl tracking-wide text-white img flex justify-center items-center px-6 md:px-0'>
                <div className='container mx-auto'>
                    <h6 className='italic font-serif text-amber-500 text'>Contact Us</h6>
                </div>
            </div>

            <div className='pizzaBackground py-20'>
                <div className='container mx-auto'>
                    <div className='grid justify-items-start grid-cols-2'>
                        <div className='text-left text-white '>
                            <h1 className='text-2xl'>Contact Information</h1>
                            <p className='py-8'>Address: <span className='text-slate-400'>198 West 21th Street, Suite 721 New York NY 10016</span></p>
                            <p>Phone:  <span className='text-amber-500'>+ 1235 2355 98</span></p>
                            <p className='py-8'>Email:  <span className='text-amber-500'> info@yoursite.com</span></p>
                            <p>Website:  <span className='text-amber-500'>yoursite.com</span></p>
                        </div>  
                        <div className='text-white'>            
                            <form onSubmit={handleSubmit(contactinfo)}>
                                <div>
                                    <input {...register("firstName")} type="text" placeholder="First Name" className="input w-48 me-4 bg-inherit border-0  border-b-4 border-slate-600" />
                                </div>
                                <div>
                                    <input {...register("lastName")} type="text" placeholder="Last Name" className="input w-48 me-4 bg-inherit border-0  border-b-4 border-slate-600 my-6" />
                                </div>
                                <div>
                                    <textarea {...register("message")} placeholder='    Message' className='w-full bg-inherit border-0 border-b-4 border-slate-600 rounded-md'>
                                    </textarea>
                                </div>
                                <input className="btn btn-warning rounded-none btn-outline grid justify-items-start mt-5 px-8" type="submit" value="Send Message" />
                            </form>
                        </div>
                       
                    </div>
                   
                </div>
            </div>

        </div>
    );
};

export default Contact;