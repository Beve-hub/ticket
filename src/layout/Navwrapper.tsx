// MainLayout.js
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './Navbar';
import EventSide from './EventSide';



const NavWrapper = () => {
    const location = useLocation();
    const showNavbar = ['/',].includes(location.pathname);
    const showSidebar = ['/single', '/dashboard', '/double', '/create', '/transaction',].includes(location.pathname);
    const showEvent = ['/event', '/settings'].includes(location.pathname);
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