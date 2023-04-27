import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './AddPizza.css';

const AddPizza = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageHost = process.env.REACT_APP_imgbb_key;

    const handleAddPizza = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
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
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/addPizza', {
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
        <div className='background-add-pizza flex justify-center items-center text-white'>
            <div className='container mx-auto'>
                <form className='flex flex-col w-2/5 mx-auto py-10' onSubmit={handleSubmit(handleAddPizza)}>

                    <label>Enter pizza name</label>
                    <input
                        {...register("name")}
                        type="text" 
                        className="input w-full mb-5 bg-transparent border-0 border-b-4 border-orange-500" />

                    <label>Enter pizza description</label>
                    <input
                        {...register("description")}
                        type="text" 
                        className="input  w-full mb-5 bg-transparent border-0 border-b-4 border-orange-500" />

                    <label>Enter pizza price</label>
                    <input
                        {...register("price")}
                        type="text"
                        className="input  w-full mb-5 bg-transparent border-0 border-b-4 border-orange-500" />

                    <label>Enter pizza image</label>
                    <input
                        {...register("image")}
                        type="file"
                        className="file-input w-full mb-5 bg-transparent border-0 border-b-4 border-orange-500 file" />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className="btn bg-transparent border border-orange-500 hover:bg-orange-500" type="submit" value="Add Pizza" />
                </form>
            </div>
        </div>
    );
};

export default AddPizza;