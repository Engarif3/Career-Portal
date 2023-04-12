import React from 'react';
import Header from './Navbar';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;