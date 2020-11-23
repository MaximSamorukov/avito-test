import React from 'react';
import './styles/header-style.css';

function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <div className="logo-img">y</div>
        <div className="logo-text">Hacker News</div>
      </div>
      <div className="menu">
        <div className="menu-news menu-item">news</div>
        <div className="menu-past menu-item">past</div>
        <div className="menu-comments menu-item">comments</div>
        <div className="menu-ask menu-item">ask</div>
        <div className="menu-show menu-item">show</div>
        <div className="menu-jobs menu-item">jobs</div>
        <div className="menu-submit menu-item">submit</div>
      </div>
      <div className="login">login</div>
    </div>
  );
}

export default Header;
