import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';

const PrivateRoute = ({ children }) => {
    const {user, loading}=useContext(AuthContext);
     if(loading){
        return <p>Loading...</p>
     }
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;