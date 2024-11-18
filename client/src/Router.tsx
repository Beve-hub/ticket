import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/landingPage/HomePage';
import Navwrapper from './pages/layout/Navwrapper';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navwrapper />,
    children: [
      {path: '/', element: <HomePage/>}
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
