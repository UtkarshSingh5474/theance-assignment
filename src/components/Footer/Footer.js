import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright-container">
      <p>	&#169; Talup 2023. All rights reserved</p>
    </div>
      <div className="buttons">
        <a href='http://localhost:3000/'><p className='btn-text'>Terms & Conditions</p></a>
        <a href='http://localhost:3000/'><p className='btn-text'>Privacy Policy</p></a>
      </div>
    </div>
  );
}

export default Footer;
