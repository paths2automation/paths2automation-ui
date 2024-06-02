import React from 'react';
import '../css/Header.css';
import logo from '../assets/images/logo.png';
import SettingDropdown from '../components/SettingDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const home = () => {
    navigate('/layout/home');
  };
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li onClick={home}><div className='dropdown'> <FontAwesomeIcon icon={faHome} /></div></li>
          <SettingDropdown />
        </ul>
      </nav>
    </header>
  );
};

export default Header;