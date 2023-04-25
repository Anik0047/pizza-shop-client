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
        fetch('http://localhost:5000/user', {
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

                        <hr class="my-6 border-gray-300 w-full" />

                        <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 borderborder-gray-300">
                            <div class="flex items-center justify-center">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use xlink:href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg> */}
                                <span class="ml-4">
                                    Log in
                                    with
                                    Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;