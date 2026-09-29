import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Spotify Logo" />
      </div>
      
      <div className="nav-menu">
        <div className="nav-item active">
          <span className="icon"><i className="fa-solid fa-house"></i></span>
          <span>Accueil</span>
        </div>
        <div className="nav-item">
          <span className="icon"><i className="fa-solid fa-magnifying-glass"></i></span>
          <span>Rechercher</span>
        </div>
        <div className="nav-item">
          <span className="icon"><i className="fa-solid fa-book-open"></i></span>
          <span>Bibliothèque</span>
        </div>
      </div>
      
      <div className="nav-menu">
        <div className="nav-item">
          <span className="icon"><i className="fa-solid fa-square-plus"></i></span>
          <span>Créer une playlist</span>
        </div>
        <div className="nav-item">
          <span className="icon"><i className="fa-solid fa-heart"></i></span>
          <span>Titres likés</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
