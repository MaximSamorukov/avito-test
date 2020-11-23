import React from 'react';
import './styles/footer-style.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-menu">
        <div className="footer-menu-guide footer-menu-item">Guidelines</div>
        <div className="footer-menu-faq footer-menu-item">FAQ</div>
        <div className="footer-menu-lists footer-menu-item">Lists</div>
        <div className="footer-menu-api footer-menu-item">API</div>
        <div className="footer-menu-security footer-menu-item">Security</div>
        <div className="footer-menu-legal footer-menu-item">Legal</div>
        <div className="footer-menu-apply footer-menu-item">Apply to YC</div>
        <div className="footer-menu-contact footer-menu-item">Contact</div>
      </div>
    </div>
  );
}

export default Footer;
