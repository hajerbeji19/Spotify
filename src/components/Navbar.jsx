import React from 'react';
import './Navbar.css';
import avatar from '../assets/images/avatar.jpg';
function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-arrows">
        <button className="arrow-btn"><i className="fa-solid fa-chevron-left"></i></button>
        <button className="arrow-btn"><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <div className="nav-actions">
        <button className="upgrade-btn">Explorer Premium</button>
        <button className="install-btn"><i className="fa-solid fa-circle-down"></i> Installer l'appli</button>
        <div className="profile-icon">
          <img src={avatar} alt="Profile" className="avatar-img" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
