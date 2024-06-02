import React,{ useState,useRef,useEffect } from 'react';
import '../css/SettingDropdown.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function SettingDropdown() {
    const [clickedprofile, setProfileClicked] = useState(false);
    const [clickedchpwd, setChpwdClicked] = useState(false);
    const [clickedlogout, setLogoutClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    const handleOptionClick = (option) => {
        if(option==='profile'){
          setProfileClicked(true);
        }
        if(option==='change-password'){
          setChpwdClicked(true);
        }
        if(option==='logout'){
          setLogoutClicked(true);
        }
        setTimeout(() => {
          if(option==='profile'){
            setIsOpen(false);
            navigate('profile');
          }
         if(option==='change-password'){
            setIsOpen(false);
            navigate('change-password');
          }
           if(option==='logout'){
            setIsOpen(false);
            navigate('/');
          }
          
      }, 500);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setTimeout(() => {
              setIsOpen(false);
              setProfileClicked(false);
              setChpwdClicked(false);
              setLogoutClicked(false);
          }, 500);
          }
        };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <li className="dropdown" ><FontAwesomeIcon icon={faCog} onClick={toggleDropdown} ref={dropdownRef}/>
            {isOpen && (
              <div className="dropdown-content">
              {!clickedprofile && (  <div onClick={() => handleOptionClick("profile")} style={{  opacity: clickedprofile ? 0.5 : 1,cursor: clickedprofile ? 'not-allowed' : 'pointer',color: clickedprofile ? '#ccc' : 'black' }}><FontAwesomeIcon icon={faUser} />Profile</div>)}
              {clickedprofile && (  <div onClick={() => handleOptionClick("profile")} style={{  opacity: clickedprofile ? 0.5 : 1,cursor: clickedprofile ? 'not-allowed' : 'pointer',color: clickedprofile ? '#black' : 'black' }}><FontAwesomeIcon icon={faUser} />Profile</div>)}
              {!clickedchpwd && (   <div onClick={() => handleOptionClick("change-password")} style={{  opacity: clickedchpwd ? 0.5 : 1,cursor: clickedchpwd ? 'not-allowed' : 'pointer',color: clickedchpwd ? '#ccc' : 'black' }}><FontAwesomeIcon icon={faKey} />Change Password</div>)}
              {clickedchpwd && (   <div onClick={() => handleOptionClick("change-password")} style={{  opacity: clickedchpwd ? 0.5 : 1,cursor: clickedchpwd ? 'not-allowed' : 'pointer',color: clickedchpwd ? '#black' : 'black' }}><FontAwesomeIcon icon={faKey} />Change Password</div>)}
              {!clickedlogout && (   <div onClick={() => handleOptionClick("logout")} style={{  opacity: clickedlogout ? 0.5 : 1,cursor: clickedlogout ? 'not-allowed' : 'pointer',color: clickedlogout ? '#ccc' : 'black' }}><FontAwesomeIcon icon={faSignOutAlt} />Logout?</div>)}
              {clickedlogout && (   <div onClick={() => handleOptionClick("logout")} style={{  opacity: clickedlogout ? 0.5 : 1,cursor: clickedlogout ? 'not-allowed' : 'pointer',color: clickedlogout ? '#black' : 'black' }}><FontAwesomeIcon icon={faSignOutAlt} />Logout?</div>)}
                {/* Add more options as needed */}
              </div>
            )}
            </li>
  );
}

export default SettingDropdown;