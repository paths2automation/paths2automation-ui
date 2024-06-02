import { faBookOpen, faCoins, faComment, faFileAlt, faGraduationCap, faImages, faPen, faRoad, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Home.css';
import '../css/UserInterfaceComponent.css';

function Home() {
  const navigate = useNavigate();
  const handleOptionClick = (option) => {
    if (option === 'uic') {
      navigate('/uic');
    }
    if (option === 'contact-form') {
      navigate('contact-form');
    }
    if (option === 'fileupload-form') {
      navigate('fileupload-form');
    }

  }

  return (
    <div className="container home">
      <div className="column"  onClick={() => handleOptionClick("uic")}> 
      <FontAwesomeIcon icon={faFileAlt} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faGraduationCap} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faBookOpen} className="custom-icon" />
      </div>

      <div className="column">
        <FontAwesomeIcon icon={faPen} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faCoins} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faShoppingCart} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faImages} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faComment} className="custom-icon" />
      </div>
      <div className="column">
        <FontAwesomeIcon icon={faRoad} className="custom-icon" />
      </div>
    </div>
  );
};

export default Home;
