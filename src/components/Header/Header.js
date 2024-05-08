import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoSVG from '../../assets/Logo.svg';
import PrimaryCTAButton from '../PrimaryCTAButton/PrimaryCTAButton';
import SecondaryCTAButton from '../SecondaryCTAButton/SecondaryCTAButton';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handlePrimaryButtonClick = () => {
    navigate('/registration');
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logoSVG} alt="Logo" className="logo-img" />
      </div>
      <div className="buttons">
        <PrimaryCTAButton onClick={handlePrimaryButtonClick}>Get Projects</PrimaryCTAButton>
        <SecondaryCTAButton>Onboard Talent</SecondaryCTAButton>
      </div>
    </div>
  );
}

export default Header;
