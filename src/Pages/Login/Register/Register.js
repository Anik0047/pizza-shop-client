import React, { useContext } from 'react';
import { AuthContext } from '../../../Content/AuthProvider';
import { useNavigate } from 'react-router-dom';
import img from '../../../images/pizza-8.jpg';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();  //page reload na howar jonno


        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(result => {
                        console.log(result);
                        saveUser(name, email);
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.error(error);

            });
        e.target.reset();
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://server-dun-mu.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 2000
                }))
        navigate('/');
    }
    
    return (
        <>
            <section class="flex flex-col md:flex-row h-screen items-center">
                <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={img} alt="" class="w-full h-full object-cover" />
                </div>

                <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

                    <div class="w-full h-100">


                        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Register to new account</h1>

                        <form class="mt-6" onSubmit={handleSubmit}>
                            <div>
                                <label class="block text-gray-700">Enter Name</label>
                                <input type="text" name="name" id="" placeholder="Enter User Name" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div>
                                <label class="block text-gray-700">Email Address</label>
                                <input type="email" name="email" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                            </div>

                            {/* <div class="text-right mt-2">
                                <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div> */}

                            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lgpx-4 py-3 mt-6">Log In</button>
                        </form>

                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;