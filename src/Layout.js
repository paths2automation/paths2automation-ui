import React from "react";
import Header from '../src/components/Header';
import { Outlet } from "react-router-dom";
import Footer from '../src/components/Footer';
import  '../src/css/Layout.css';
 
function Layout() {
  return (
    <div className="layout">
       <Header/>
      <main>
        <Outlet />
      </main>
       <Footer/>
    </div>
  );
}
export default Layout;