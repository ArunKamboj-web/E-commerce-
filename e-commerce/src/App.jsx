import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Mobiles from './links/Mobiles';
import Laptops from './links/Laptops';
import Tablets from './links/Tablets';
import Klaptops from './links/Klaptops';
import Omobiles from './links/Omobiles';
import Claptops from './links/Claptops';
import Cmobiles from './links/Cmobiles';
import Ecommerce from './links/Ecommerce';
import Navlast from './links/Navlast';

const router = createBrowserRouter([

  {
    path: "/Mobiles",
    element: <><Navbar /><Mobiles /></>
  },
  {
    path: "/Laptops",
    element: <><Navbar /><Laptops /></>
  },
  {
    path: "/Tablets",
    element: <><Navbar /><Tablets /></>
  },
  {
    path: "/Klaptops",
    element: <><Navbar /><Klaptops /></>
  },
  {
    path: "/Omobiles",
    element: <><Navbar /><Omobiles /></>
  },
  {
    path: "/Claptops",
    element: <><Navbar /><Claptops /></>
  },
  {
    path: "/Cmobiles",
    element: <><Navbar /><Cmobiles /></>
  },
 {
  path:"/",
  element: <><Navbar />< Ecommerce/></>
 },
 {
  path:"/Navlast",
  element:<><Navbar /><Navlast/></>
 }
]);

const App = () => {
  return( 
  <>
  <RouterProvider router={router} />
  </>
 
  )
  }

export default App;
