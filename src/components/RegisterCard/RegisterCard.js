import React, { useState } from "react";

// STYLES
import "./RegisterCard.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../api/userApi";
import { message } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
// LIBRARIES

// CONSTANTS & MOCKS

// REDUX

// COMPONENTS

const RegisterCard = () => {
  // PROPS

  // CONSTANTS USING LIBRARYS

  // CONSTANTS USING HOOKS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleRegister = () => {
    dispatch(register({ name: username, password: password })).then((res) => {
      if (res["payload"] === "username taken") {
        setErrorMessage("Username already taken");
      } else if (res["payload"] === 201) {
        navigate(`/`);
      }
    });
  };
  return (
    <div className="component-register-card-container">
      <p className="component-register-title">Register a new Account</p>
      <p className="component-register-input-label">Account:</p>
      <input
        className="component-register-input-user"
        value={username}
        onChange={(e) => {
          e.preventDefault();
          setUsername(e.target.value);
        }}
        type="text"
      ></input>
      <p className="component-register-input-label">Password:</p>
      <input
        className="component-register-input-pass"
        value={password}
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
        type="password"
      ></input>

      <div
        className="component-register-button-container"
        onClick={handleRegister}
      >
        <NavigateNextIcon />
      </div>
      {errorMessage && (
        <p style={{ color: "red", fontSize: "20px", margin: "0" }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default RegisterCard;
