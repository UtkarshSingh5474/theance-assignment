import React from 'react';
import './SecondaryCTAButton.css'; 

const SecondaryCTAButton = ({ onClick, children }) => {
  return (
    <button className="secondary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryCTAButton;
