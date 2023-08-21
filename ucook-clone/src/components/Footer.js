import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="keep-in-touch">
      <div className="email-input">
          <h3>KEEP IN TOUCH WITH OUR KITCHEN</h3>
            <input type="email" placeholder="Enter your email" />
            <button className="sign-up-button">SIGN ME UP</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="product-links">
            <h4>PRODUCT</h4>
            <ul>
              <li>MEAL KITS</li>
              <li>FROZEN</li>
              <li>WINE</li>
              <li>MARKET</li>
            </ul>
          </div>
          <div className="company-links">
            <h4>COMPANY</h4>
            <ul>
              <li>ABOUT</li>
              <li>CAREERS</li>
              <li>RECYCLING</li>
            </ul>
          </div>
          <div className="support-links">
            <h4>SUPPORT</h4>
            <ul>
              <li>FAQ'S</li>
              <li>CONTACT</li>
              <li>021 447 4424</li>
              <li>072 020 1555</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="legal-links">
          <p className="legal-links-text">
            2023 © UCOOK. All rights reserved by The Supper Society Proprietary Limited | Liquor License: WCP/042073 | GAU/10615
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Referral Terms</a>
          </p>
        </div>
      </div>
        <div className="legal-links">
          <a href="https://www.ucook.co.za/">The site I cloned</a>
          <a href="/">Sphiwe Mkwatheni</a>
        </div>
    </footer>
  );
};

export default Footer;
