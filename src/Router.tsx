import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/landingPage/HomePage';
import NavWrapper from './layout/NavWrapper';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CreateEvent from './pages/dashboard/CreateEvent';
import MyAccount from './pages/dashboard/MyAccount';
import EventDashboard from './pages/dashboard/EventDashboard';
import Bookings from './pages/dashboard/Bookings';
import Promotion from './pages/dashboard/Promotion';
import Sales from './pages/dashboard/Sales';
import Analysis from './pages/dashboard/Analysis';
import Settings from './pages/dashboard/Settings';




const router = createBrowserRouter([
  {   
    element: <NavWrapper/>,
    children: [
        {path: '/', element: <HomePage/>},
        {path: '/login', element: <Login/>},
        {path: '/register', element: <Register/>},
        {path: '/dashboard', element: <Dashboard/>},
        {path: '/create', element: <CreateEvent/>},
        {path: '/myAccount', element: <MyAccount/>},
        {path: '/eventDashboard', element: <EventDashboard/>},
        {path: '/myBooking', element: <Bookings/>},
        {path: '/promotion', element: <Promotion/>},
        {path: '/sales', element: <Sales/>},
        {path: '/analysis', element: <Analysis/>},
        {path: '/settings', element: <Settings/>},
    ]
},
]);

export function Router() {
  return <RouterProvider router={router} />;
}
