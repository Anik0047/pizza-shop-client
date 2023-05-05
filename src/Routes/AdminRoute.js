import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import Loading from '../components/loading/Loading';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../Content/AuthProvider';



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if ( isAdminLoading) {
        return "Loading....";
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;