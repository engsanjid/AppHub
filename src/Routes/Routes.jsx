import React from 'react';

import { createBrowserRouter } from "react-router";

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/Errorpage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/Apps/AppDetails';
import Navbar from '../components/Header/Navbar';
import NotFoundApp from '../pages/Errorpage/NotFoundApp';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
               {
                   index:true,
                   loader:()=>fetch('/TrendingApps.json').then(r => r.json()),
                   path:"/",
                   Component:Home
                },
               
               {
                 
                   path:'/app',
                   loader:()=>fetch('/Apps.json').then(r => r.json()),
                   Component:Apps
                },
               {
                   
                   path:'/installation',
                   Component:Installation
                },
               {
                   
                   path:'/appDetails/:id',
                   loader:()=>fetch('/TrendingApps.json').then(r => r.json()),
                   Component:AppDetails
                },
               {
                   
                   path:'/appDetail/:id',
                loader:()=>fetch('/Apps.json').then(r => r.json()),
                   Component:AppDetails
                }
                ,
               {
                   
                   path:'*',
                   Component:ErrorPage
                },
               {
                   
                   path:'app/*',
                   Component:NotFoundApp
                }


            ]
    
    
  },
]);
