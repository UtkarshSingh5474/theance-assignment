import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import logoSVG from "../../assets/Logo.svg";
import CheckmarkSVG from "../../assets/Checkmark.svg";
import "./FormSuccessScreen.css";

const FormSuccessScreen = () => {
  const [countdown, setCountdown] = useState(5); 
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1); 
      } else {
        navigate("/"); 
      }
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [countdown, navigate]);

  return (
    <div>
      <div className="top-bar">
        <div className="logo-container">
          <img src={logoSVG} alt="Logo" className="logo-img" />
        </div>
      </div>
      <div className="content">
        <div className="success-section">
          <div className="success-vertical-text">
            <img src={CheckmarkSVG} alt="Success Icon" />
            <p className="subtext">Success Submitted</p>
            <p className="heading">Congratulations</p>
            <p className="success-text">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </div>
        </div>
        <div className="countdown-container">
          Redirecting you to Homepage in <strong>{countdown} seconds</strong> 
        </div>
      </div>
    </div>
  );
};

export default FormSuccessScreen;