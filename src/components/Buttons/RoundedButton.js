import React from 'react';
import './RoundedButton.css'; // Import your CSS file

const RoundedButton = ({ children }) => {
  return (
    <button className="rounded-button">{children}</button>
  );
}

export default RoundedButton;
