import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import AppDetails from '../pages/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
           index:true,
           path:"/",
           Component:Home 


        },
        {
           path: "/apps", 
        element: <Apps></Apps>, 
        },

        {
            path: "/apps/:id",
        element: <AppDetails></AppDetails>,
        }
    ]
  },
]);