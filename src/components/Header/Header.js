import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loggedIn } from "../../slices/sessionSlice";

// STYLES
import "./Header.scss";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Header = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const navigate = useNavigate();
  let isLogged = useSelector(loggedIn);
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleHome = () => {
    navigate(`/`);
  };

  const handleRegister = () => {
    if (isLogged) {
      navigate(`/profile`);
    } else {
      navigate(`/register`);
    }
  };

  return (
    <div className="component-header-container">
      <p className="component-header-logo-text" onClick={handleHome}>
        SNN
      </p>

      <div className="component-header-buttons-container">
        <button
          className="component-header-register-button"
          onClick={handleRegister}
        >
          {isLogged ? "Profile" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
