import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import logoSVG from "../../assets/Logo.svg";
import ErrorSVG from "../../assets/Error.svg";
import CheckmarkSVG from "../../assets/Checkmark.svg";
import "./FormSuccessScreen.css";

const FormSuccessScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitButtonColor, setSubmitButtonColor] = useState("");
  const [countdown, setCountdown] = useState(5); // Countdown state

  const navigate = useNavigate(); // Access history object for navigation

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1); // Decrease countdown every second
      } else {
        navigate("/"); // Redirect to homepage when countdown reaches 0
      }
    }, 1000); // Timer runs every second

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [countdown, navigate]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    updateSubmitButtonColor(e.target.value, email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateSubmitButtonColor(name, e.target.value);
  };

  const updateSubmitButtonColor = (name, email) => {
    if (name.trim() !== "" && email.trim() !== "") {
      setSubmitButtonColor("black");
    } else {
      setSubmitButtonColor("");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      // Handle form submission
      console.log("Name:", name);
      console.log("Email:", email);
      // Clear any previous errors
      setEmailError("");
    }
  };

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
