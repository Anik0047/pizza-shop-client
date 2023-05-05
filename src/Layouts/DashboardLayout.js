import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Content/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Header/Header';



const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-black text-left">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <Link to="/dashboard" style={{ textDecoration: 'none' }}><div className='px-2 py-2 mt-2 nav-style text-white'>My Order</div></Link>
                        {
                            isAdmin &&
                            <>
                                <Link to="/dashboard/allUser" style={{ textDecoration: 'none' }}><div className='px-2 py-2 mt-2 mb-2 nav-style text-white'>All User</div></Link>
                                {/* <NavLink to="" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 mb-2'>All Admin</div></NavLink> */}
                                <Link to="/dashboard/allPizza" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 mb-2 text-white'>All Pizza</div></Link>
                                <Link to="/dashboard/allBlog" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 text-white'>All Blogs</div></Link>
                                <Link to="/dashboard/addPizza" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 text-white'>Add Pizza</div></Link>
                                <Link to="/dashboard/addBlog" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 text-white'>Add Blogs</div></Link>
                                <Link to="/dashboard/allorders" style={{ textDecoration: 'none' }}><div className='nav-style px-2 py-2 text-white'>All Orders</div></Link>
                            </>
                        }
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default DashboardLayout;