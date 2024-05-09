import React, { useState } from "react";
import logoSVG from "../../assets/Logo.svg";
import ErrorSVG from "../../assets/Error.svg";
import "./RegistrationScreen.css";
import { useNavigate } from 'react-router-dom';

const RegistrationScreen = () => {
  const navigate = useNavigate(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitButtonColor, setSubmitButtonColor] = useState("");

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
      navigate("/form-success");
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
        <div className="close-btn">
          <p>&#10005;</p>
        </div>
      </div>
      <div className="content">
        <div className="section">
          <div className="vertical-text">
            <p className="subtext">Registration Form</p>
            <p className="heading">
              Start your success
              <br />
              Journey here!
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <input
                id="name"
                type="text"
                className="input-field"
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
              />
              <input
                id="email"
                type="text"
                className="input-field"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <div className="error">
                  <img src={ErrorSVG}></img>
                  <p className="error-text">{emailError}</p>
                </div>
              )}
              <button
                className="submit-button"
                style={{ backgroundColor: submitButtonColor }}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
