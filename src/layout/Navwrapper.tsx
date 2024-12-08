// MainLayout.js
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './Navbar';
import EventSide from './EventSide';



const NavWrapper = () => {
    const location = useLocation();
    const showNavbar = ['/',].includes(location.pathname);
    const showSidebar = ['/single', '/dashboard', '/double', '/create','/books', '/transaction', '/myAccount'].includes(location.pathname);
    const showEvent = ['/eventDashboard', '/promotion','/myBooking','/analysis','/sales', '/settings'].includes(location.pathname);
    return (
        <div>
            {showNavbar && <Navbar />}
            {showSidebar && <SideBar />}
            {showEvent && <EventSide />}
            <main>
                <Outlet /> 
            </main>
         
        </div>
    );
};

export default NavWrapper;