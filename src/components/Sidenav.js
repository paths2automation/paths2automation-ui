import React, { useState } from 'react';
import '../css/Sidenav.css';
import {Link,useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import SignupForm from './SignupForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';




function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [isFormActive, setFormActive] = useState(false);
    const [isElementActive, setElementActive] = useState(false);
    const [isWidgitActive, setWidgitActive] = useState(false);
    const [isInteractionActive, setInteractionActive] = useState(false);
    const navigate = useNavigate();

    const toggleRegistrationForm = () => {
        setFormActive(!isFormActive);
    };
    const toggleElement = () => {
        setElementActive(!isElementActive);
    };
    const toggleWidget = () => {
        setWidgitActive(!isWidgitActive);
    };
    const toggleInteraction = () => {
        setInteractionActive(!isInteractionActive);
    };
    
const handleOptionClick=(option)=>{
    if(option==='registration-form'){
        navigate('registration-form');
    }
    if(option==='contact-form'){
        navigate('contact-form');
    }
    if(option==='fileupload-form'){
        navigate('fileupload-form');
    }
    
}
    const openModal = () => {
        setClicked(true);
        setTimeout(() => {
            setIsOpen(true);
        }, 500);
    };

    const closeModal = () => {
        setClicked(false);
        setIsOpen(false);
    };
    return (
        <div className="sidebar form-control">
            <div className="menu-item" onClick={toggleRegistrationForm}>
                <span className="pr-1"><FontAwesomeIcon icon={faClipboardList} /></span>
                UI Forms
                <span className={`arrow ${isFormActive ? 'active' : ''}`}>▼</span>
            </div>
            {isFormActive && (
                <div className="sub-menu">
                    <div className="menu-item" onClick={() => handleOptionClick("registration-form")}> <FontAwesomeIcon icon={faArrowRight} /> Registration Form</div>
                    <div className="menu-item" onClick={() => handleOptionClick("contact-form")}> <FontAwesomeIcon icon={faArrowRight} />Contact Form</div>
                    {!clicked && (    <div className='menu-item' onClick={openModal} style={{  opacity: clicked ? 0.5 : 1,cursor: clicked ? 'not-allowed' : 'pointer',color: clicked ? '#ccc' : 'black' }} > <FontAwesomeIcon icon={faArrowRight} />Signup Form</div>)}
                    {clicked && (    <div className='menu-item' onClick={openModal} style={{  opacity: clicked ? 0.5 : 1,cursor: clicked ? 'not-allowed' : 'pointer',color: clicked ? 'black' : 'black' }}> <FontAwesomeIcon icon={faArrowRight} />Signup Form</div>)}
                    <div className="menu-item" onClick={() => handleOptionClick("fileupload-form")}> <FontAwesomeIcon icon={faArrowRight} />File Upload Form</div>
               
                </div>
                
            )}

            <div className="menu-item" onClick={toggleElement}>
            <span className="pr-1"><FontAwesomeIcon icon={faAtom} /></span>
            Element
            <span className={`arrow ${isElementActive ? 'active' : ''}`}>▼</span>
        </div>
        {isElementActive && (
            <div className="sub-menu">
                <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="text-fields">Text Box</Link></div>
                <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="check-box">Check Box</Link></div>
                <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="button">Button</Link></div>
                <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="radio-button">Radio Button</Link></div>
                <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="link">Link</Link></div>
            </div>
        )}



        <div className="menu-item" onClick={toggleWidget}>
        <span className="pr-1"> <FontAwesomeIcon icon={faCubes} /></span>
        Widget
        <span className={`arrow ${isWidgitActive ? 'active' : ''}`}>▼</span>
    </div>
    {isWidgitActive && (
        <div className="sub-menu">
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="menu">Menu</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="select-menu">Select Menu</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="auto-complete">Auto Complete</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="accordian">Accordian</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="date-picker">Date Picker</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="slider">Slider</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="progres-bar">Progress Bar</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="tool-tip">Tool Tip</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="tabs">Tabs</Link></div>
        </div>
    )}



    <div className="menu-item" onClick={toggleInteraction}>
    <span className="pr-1"><FontAwesomeIcon icon={faArrowsAltH} /></span>
    Interaction
    <span className={`arrow ${isInteractionActive ? 'active' : ''}`}>▼</span>
</div>
{isInteractionActive && (
    <div className="sub-menu">
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="sortable">Sortable</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="selectable">Selectable</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="resizable">Resizable</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="droppable">Droppable</Link></div>
        <div className="menu-item"><FontAwesomeIcon icon={faArrowRight} /><Link to="draggable">Draggable</Link></div>
    </div>
)}

<Modal
isOpen={isOpen}
onRequestClose={closeModal}
contentLabel="Signup Popup"
style={{
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        width: '40%', // Set the width of the modal
        height: '80%', // Set the height of the modal
        margin: 'auto' // Center the modal horizontally
    }
}}
>
<div style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={closeModal}><FontAwesomeIcon icon={faTimes} className='closeicon' /></div>

<SignupForm/>
</Modal>
        </div>

    );
};

export default Sidenav;
