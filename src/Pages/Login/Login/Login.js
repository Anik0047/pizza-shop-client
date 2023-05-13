import React, { useContext } from 'react';
import { AuthContext } from '../../../Content/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import img from '../../../images/image_2.jpg'

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                e.target.reset();
                navigate('/');
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch((error) => {
                console.error(error);
            });


    }


    return (
        <>
            <section class="flex flex-col md:flex-row h-screen items-center">

                <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={img} alt="" class="w-full h-full object-cover" />
                </div>

                <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

                    <div class="w-full h-100">


                        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form class="mt-6" onSubmit={handleLogin}>
                            <div>
                                <label class="block text-gray-700">Email Address</label>
                                <input type="email" name="email" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>

                            <div class="mt-4">
                                <label class="block text-gray-700">Password</label>
                                <input type="password" name="password" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
                            </div>

                            

                            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
                        </form>

                        

                            

                            <p class="mt-8">Need an account? <Link to='/register'  class="text-blue-500 hover:text-blue-700 font-semibold">Create an
                                account</Link></p>


                    </div>
                </div>

            </section>
        </>
    );
};

export default Login;