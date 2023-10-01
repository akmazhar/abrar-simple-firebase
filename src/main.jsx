import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//this is from https://reactrouter.com/en/main/start/tutorial

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home/Home';
import Login from './Components/Header/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
       path: '/login',
       element: <Login></Login>
      },


    ]
  },
]);

// instead of <App/> using <RouterProvider router={router} />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
