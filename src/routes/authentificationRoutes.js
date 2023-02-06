// project imports
import MinimalLayout from '../layout/MinimalLayout';

// login option 3 routing
import {LoginPage} from '../pages/login';
import {RegisterPage} from '../pages/register';
import {LandingPage} from '../pages/landingPage';

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/login/',
            element: <LoginPage />
        },
        {
            path: '/register',
            element: <RegisterPage />
        },
    ]
};

export default AuthenticationRoutes;
