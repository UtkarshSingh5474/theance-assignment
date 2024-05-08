import React from 'react';
import './SecondaryCTAButton.css'; // Import CSS specific to SecondaryCTAButton

const SecondaryCTAButton = ({ onClick, children }) => {
  return (
    <button className="secondary-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryCTAButton;
