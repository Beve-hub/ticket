import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/landingPage/HomePage';
import NavWrapper from './layout/NavWrapper';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CreateEvent from './pages/dashboard/CreateEvent';




const router = createBrowserRouter([
  {   
    element: <NavWrapper/>,
    children: [
        {path: '/', element: <HomePage/>},
        {path: '/login', element: <Login/>},
        {path: '/register', element: <Register/>},
        {path: '/dashboard', element: <Dashboard/>},
        {path: '/create', element: <CreateEvent/>},
        
    ]
},
]);

export function Router() {
  return <RouterProvider router={router} />;
}
