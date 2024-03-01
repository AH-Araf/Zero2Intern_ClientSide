import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import PleaseLogin from '../Pages/Login/PleaseLogin';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div>
                <h1 className='bg-red-500 flex justify-center items-center h-16 mt-16 text-4xl text-white'>
                    Please Login First
                </h1>
                <PleaseLogin></PleaseLogin>
            </div>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;


