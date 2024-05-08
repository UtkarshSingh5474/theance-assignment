import React from 'react';
import './SubmitButton.css'; // Import CSS specific to SubmitButton

const SubmitButton = ({ onClick, children }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SubmitButton;
