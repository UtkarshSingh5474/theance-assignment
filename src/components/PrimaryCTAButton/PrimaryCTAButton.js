import React from 'react';
import './PrimaryCTAButton.css'; // Import CSS specific to PrimaryCTAButton

const PrimaryCTAButton = ({ onClick, children }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryCTAButton;
