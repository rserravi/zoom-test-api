import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './mainRoutes';
import AuthenticationRoutes from './authentificationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([AuthenticationRoutes, MainRoutes]);
}