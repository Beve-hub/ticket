// MainLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SideBar from './SideBar';
import Navbar from './Navbar';



const NavWrapper = () => {
    const location = useLocation();
    const showNavbar = ['/',].includes(location.pathname);
    const showSidebar = ['/admin', '/dashboard', '/invest', '/withdraw', '/analysis', '/transaction', '/settings'].includes(location.pathname);

    return (
        <div>
            {showNavbar && <Navbar />}
            {showSidebar && <SideBar />}
            <main>
                <Outlet /> {/* Always render the Outlet */}
            </main>
         
        </div>
    );
};

export default NavWrapper;