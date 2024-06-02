import React from 'react';
import '../css/Profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
     
        </div>
        <div className="profile-details">
          <h2>User Name</h2>
          <p>Email: user@example.com</p>
          <p>Location: City, Country</p>
          <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="profile-footer">
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;
