import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageHost = process.env.REACT_APP_imgbb_key;

    const handleaddBlog = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const date = format(new Date(), 'PP')
        const url = `https://api.imgbb.com/1/upload?key=${imageHost}`
        console.log(url);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const pizzaDetails = {
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        image: imgData.data.url,
                        date: date
                    }
                    fetch('http://localhost:5000/addBlog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(pizzaDetails)
                    })
                        .then(res => res.json())
                        .then(data =>
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Pizza Added Successful',
                                showConfirmButton: false,
                                timer: 2000
                            }))
                    reset();
                }
            })
    };


    return (
        <>
            <form className='flex flex-col w-2/5 mx-auto py-10' onSubmit={handleSubmit(handleaddBlog)}>
                
                <input
                    {...register("name")}
                    type="text" placeholder="Enter Title"
                    className="input input-bordered w-full mb-5 " />

                <input
                    {...register("description")}
                    type="text" placeholder="Enter your opinion"
                    className="input input-bordered w-full mb-5 " />


                <input
                    {...register("image")}
                    type="file"
                    className="file-input w-full mb-5 border border-black" />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-primary" type="submit" value="Add Blog" />
            </form>
        </>
    );
};

export default AddBlog;