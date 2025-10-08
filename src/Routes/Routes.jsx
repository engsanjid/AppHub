import React from 'react';

import { createBrowserRouter } from "react-router";

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/Apps/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
               {
                   index:true,
                   loader:()=>fetch('TrendingApps.json'),
                   path:"/",
                   Component:Home
                },
               
               {
                 
                   path:'/app',
                   loader:()=>fetch('Apps.json'),
                   Component:Apps
                },
               {
                   
                   path:'/installation',
                   Component:Installation
                },
               {
                   
                   path:'/appDetails/:id',
                   loader:()=>fetch('TrendingApps.json'),
                   Component:AppDetails
                },
               {
                   
                   path:'/appDetail/:id',
                loader:()=>fetch('Apps.json'),
                   Component:AppDetails
                }


            ]
    
    
  },
]);
