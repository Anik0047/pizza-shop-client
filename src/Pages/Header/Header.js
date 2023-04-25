import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Content/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="navbar  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-black text-white dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>Menu</Link></li>
                            <li><Link to=''>Services</Link></li>
                            <li tabindex="0">
                                <Link class="justify-between">
                                    Pizza
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-black">
                                    <li><Link to='/addPizza'>Add Pizza</Link></li>
                                    <li><Link to='/allPizza'>All Pizza</Link></li>
                                </ul>
                            </li>
                            <li tabindex="0">
                                <Link class="justify-between">
                                    Blog
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul class="p-2 bg-black">
                                    <li><Link to='/addBlog'>Add Blog</Link></li>
                                    <li><Link to='/allBlog'>All Blog</Link></li>
                                </ul>
                            </li>
                            <li><Link to=''>Contact</Link></li>
                            {
                                user?.uid ?
                                    <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button> :
                                    <li li > <Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Pizza Delicous</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Menu</Link></li>
                        <li><Link to=''>Services</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Pizza
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-black">
                                <li><Link to='/addPizza'>Add Pizza</Link></li>
                                <li><Link to='/allPizza'>All Pizza</Link></li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <Link>
                                Blog
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-black">
                                <li><Link to='/addBlog'>Add Blog</Link></li>
                                <li><Link to='/allBlog'>All Blog</Link></li>
                            </ul>
                        </li>





                        <li><Link to=''>Contact</Link></li>
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button> :
                                <li li > <Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;