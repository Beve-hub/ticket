import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar';


const Navwrapper = () => {
    const location = useLocation();
    const showNav = ['/'].includes(location.pathname); 
    
    return (
        <div>
            {showNav && <Navbar/>}          
           <main>
            <Outlet/>
           </main>
        </div>
    )
}

export default Navwrapper