import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: 'dashboard',
            element: <Dashboard />
        }, 
        {
            path: '/dashboard',
            children: [
                {
                    path: 'default',
                    element: <Dashboard />
                }
            ]
        }
    ]
};

export default MainRoutes;