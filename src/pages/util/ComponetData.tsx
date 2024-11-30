import {LuLayoutDashboard } from "react-icons/lu"; 
import { IoTicketOutline } from "react-icons/io5";
import { PiProjectorScreenChartThin } from "react-icons/pi";
import { GoProject } from "react-icons/go";


interface SideBarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}


export const SideBarData: SideBarItem[] = [
  {
     name: 'Dashboard',
     path: '/eventDashboard',
     icon: <LuLayoutDashboard size={18} />
  },
  {
     name: 'Bookings',
     path: '/myBooking',
     icon: <IoTicketOutline size={18} />,
  },
  {
     name: 'Promotion',
     path: '/promotion',
     icon: <PiProjectorScreenChartThin size={18} />,
  },
  
  {
     name: 'Sales Revenue',
     path: '/sales',
     icon: <GoProject size={18} />,
  },  
 
 ]

 export const data = [
   { month: 'S', Revenue: 40, },
   { month: 'M', Revenue: 22, },
   { month: 'T', Revenue: 15, },
   { month: 'W', Revenue: 50},
   { month: 'T', Revenue: 50},
   { month: 'F', Revenue: 38},
   { month: 'S', Revenue: 5},
 ];