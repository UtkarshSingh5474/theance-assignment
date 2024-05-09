import React from 'react';
import './PrimaryCTAButton.css'; 

const PrimaryCTAButton = ({ onClick, children }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryCTAButton;
