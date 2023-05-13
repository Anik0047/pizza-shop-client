import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Content/AuthProvider';
import { IoPizzaOutline } from "react-icons/io5";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        navigate('/');
    }

    return (
        <>
            <div className="navbar  bg-black text-white sticky top-0  z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact bg-black text-white dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/addPizza'>Add Pizza</Link></li>
                            <li><Link to='/allPizza'>All Pizza</Link></li>
                            <li><Link to='/addBlog'>Add Blog</Link></li>
                            <li><Link to='/allBlog'>All Blog</Link></li>
                            <li><Link to='/alluser'>Users</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            {
                                user?.uid &&
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            }
                            {
                                user?.uid ?
                                    <button onClick={handleLogOut} className="btn text-amber-500">Log Out</button> :
                                    <li li > <Link to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl text-amber-500"><IoPizzaOutline className='me-1'></IoPizzaOutline>Pizza Delicous</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        {
                            user?.uid &&
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                        }
                        {
                            user?.uid ?
                                <button onClick={handleLogOut} className="btn text-amber-500">Log Out</button> :
                                <li li > <Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;