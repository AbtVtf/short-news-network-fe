import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogout, loggedIn, username } from "../../slices/sessionSlice";

// STYLES
import "./Header.scss";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const Header = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // GENERAL CONSTANTS
  let isLogged = useSelector(loggedIn);
  let user = useSelector(username);
  // USE EFFECT FUNCTION
  useEffect(() => {
    // console.log(user);
  }, []);

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  const handleHome = () => {
    navigate(`/`);
  };

  const handleRegister = () => {
    navigate(`/register`);
  };

  const handleLogoutUser = () => {
    dispatch(handleLogout());
    navigate(`/register`);
  };

  const handleProfile = () => {
    navigate(`/profile`);
  };

  return (
    <div className="component-header-container">
      <p className="component-header-logo-text" onClick={handleHome}>
        SNN
      </p>

      <div className="component-header-buttons-container">
        {isLogged ? (
          <div className="component-header-register-button-icon">
            <Person2Icon onClick={handleProfile} />
            <LogoutIcon onClick={handleLogoutUser} />
          </div>
        ) : (
          <button
            className="component-header-register-button"
            onClick={handleRegister}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
