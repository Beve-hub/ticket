import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/landingPage/HomePage';
import NavWrapper from './layout/NavWrapper';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';




const router = createBrowserRouter([
  {   
    element: <NavWrapper/>,
    children: [
        {path: '/', element: <HomePage/>},
        {path: '/login', element: <Login/>},
        {path: '/register', element: <Register/>}
        
    ]
},
]);

export function Router() {
  return <RouterProvider router={router} />;
}
