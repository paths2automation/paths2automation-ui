import React from 'react';
import '../css/UserInterfaceComponent.css';
import Sidenav from './Sidenav';
import RegistrationForm from '../../src/components/RegistrationForm';
import { Outlet } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
function UserInterfaceComponent() {
    
    return (

        <div className="register">
        <div className="left-column"><Sidenav/></div>
        <div className="middle-column"><Outlet />
    
       
        </div>
        <div className="right-column"></div>
    </div>
    );
};

export default UserInterfaceComponent;
