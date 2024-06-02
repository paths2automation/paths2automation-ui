
import SignupForm from '../src/components/SignupForm';
import ContactForm from '../src/components/ContactForm';
import Home from '../src/components/Home';
import FileUploadForm from '../src/components/FileUploadForm';
import UserInterfaceComponent from '../src/components/UserInterfaceComponent';
import ChangePassword from '../src/components/ChangePassword';
import Profile from '../src/components/Profile';
import Login from '../src/components/Login';
import RegistrationForm from '../src/components/RegistrationForm';
import PageNotFound from '../src/components/PageNotFound';
import Layout from './Layout';

import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
class App extends Component {
  render() {
      return (
     
          <BrowserRouter>
              <div className="App">
                  <Routes>         
{ /* Routes that use layout 1 */ }
<Route path="/" element={<Login />}></Route>
    <Route path="/layout" element={<Layout />} >
    <Route path="home" element={<Home />} />
    <Route path="change-password" element={<ChangePassword />} />
    <Route path="profile" element={<Profile />} />
    </Route>
    { /* Routes that use layout 2 */ }
    <Route path="/uic" element={<UserInterfaceComponent />} >
    <Route path="registration-form" element={<RegistrationForm />} />
    <Route path="contact-form" element={<ContactForm />} />
    <Route path="signup-form" element={<SignupForm />} />
    <Route path="fileupload-form" element={<FileUploadForm />} />
    </Route>
    <Route path="*" element={<PageNotFound />} />
                  </Routes>
              </div>
          </BrowserRouter>
         
      );
  }
}

export default App;
