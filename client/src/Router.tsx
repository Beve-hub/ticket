import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavWrapper from './layout/NavWrapper';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Analysis from './pages/dashboard/Analysis';
import CreateEvent from './pages/dashboard/CreateEvent';
import Dashboard from './pages/dashboard/Dashboard';
import Bookings from './pages/dashboard/eventdash/Bookings';
import EventDashboard from './pages/dashboard/eventdash/EventDashboard';
import MyAccount from './pages/dashboard/eventdash/MyAccount';
import Promotion from './pages/dashboard/promotion/Promotion';
import PromotionSummary from './pages/dashboard/promotion/PromotionSummary';
import Sales from './pages/dashboard/sales/Sales';
import Settings from './pages/dashboard/Settings';
import { HomePage } from './pages/landingPage/HomePage';
import DashBookings from './pages/dashboard/DashBookings';
import SingleTicket from './pages/dashboard/SingleTicket';
import MultipleTicket from './pages/dashboard/MultipleTicket';
import BuyTicket from './pages/dashboard/BuyTicket';

const router = createBrowserRouter([
  {
    element: <NavWrapper />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/create', element: <CreateEvent /> },
      { path: '/myAccount', element: <MyAccount /> },
      { path: '/eventDashboard', element: <EventDashboard /> },
      { path: '/myBooking', element: <Bookings /> },
      { path: '/promotion', element: <Promotion /> },
      { path: '/sales', element: <Sales /> },
      { path: '/analysis', element: <Analysis /> },
      { path: '/settings', element: <Settings /> },
      { path: '/promotionSummary', element: <PromotionSummary /> },
      { path: '/books', element: <DashBookings /> },
      { path: '/single', element: <SingleTicket /> },
      { path: '/double', element: <MultipleTicket /> },
      { path: '/buy', element: <BuyTicket /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
