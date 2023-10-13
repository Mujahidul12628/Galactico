import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const MainLayout = () => {
    const { loading } = useContext(AuthContext)
    return (
        <div className="p-0 m-0">
            {loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <Navbar></Navbar>
                    <div className='min-h-[calc(100vh-290px)]'>
                        <Outlet />
                    </div>
                    <Footer></Footer>
                    <Toaster></Toaster>
                    <ToastContainer></ToastContainer>
                </>
            )}
        </div>
    );

};

export default MainLayout;

