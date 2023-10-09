// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import MainLayout from './assets/common/MainLayout/MainLayout.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <MainLayout></MainLayout>
//   </React.StrictMode>,
// )


/* eslint-disable react/jsx-no-undef */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import MainLayout from './assets/Common/MainLayout/MainLayout';
// import Home from './assets/Component/Home/Home';
// import Login from './assets/Pages/Login/Login';
// import Register from './assets/Pages/Register/Register';
import AuthProvider from './assets/providers/AuthProvider';
import router from './assets/routes/PublicRoutes';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>
//       },
//       {
//         path: "/login",
//         element: <Login></Login>
//       },
//       {
//         path: "/register",
//         element: <Register></Register>
//       },

//     ]
//   },

// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)


