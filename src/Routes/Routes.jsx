import React from 'react';

import { createBrowserRouter } from "react-router";

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
               {
                   index:true,
                   path:"/",
                   Component:Home
                },
               {
                   index:true,
                   path:"/home",
                   Component:Home
                },
               {
                   index:true,
                   path:"/app",
                   Component:Apps
                },
               {
                   index:true,
                   path:"/installation",
                   Component:Installation
                }


            ]
    
    
  },
]);
