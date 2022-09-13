import React from "react";
import { useNavigate } from "react-router-dom";

// STYLES
import "./Header.scss";
import logo from "./images/logo-white.png";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Header = (props) => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleHome = () => {
    navigate(`/`);
  };
  return (
    <div className="component-header-container">
      <div className="component-header-logo-container" onClick={handleHome}>
        <img src={logo} alt="" className="component-header-logo" />
      </div>
    </div>
  );
};

export default Header;
