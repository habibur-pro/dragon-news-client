import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoute = ({ children }) => {
    const location = useLocation()
    const { user, loader } = useContext(AuthContext)
    console.log('from privet', location)
    if (loader) {
        return <div className='h-100 w-100 d-flex justify-content-center align-items-center'><Spinner className='' animation="border" /></div>;
    }

    if (user) {
        return children
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>
};

export default PrivetRoute;