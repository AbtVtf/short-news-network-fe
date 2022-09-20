import React, { useState } from "react";

// STYLES
import "./RegisterCard.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../api/userApi";
import { handleLogin } from "../../api/sessionApi";
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
  const [password2, setPassword2] = useState("");
  const [registered, setRegistered] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleRegister = () => {
    const specialChars = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const hasSpecialChars = specialChars.test(username);

    if (isLogin) {
      dispatch(handleLogin({ name: username, password: password })).then(
        (res) => {
          console.log(res);
          if (res.payload.status === 200) {
            setUsername("");
            setPassword("");
            setPassword2("");
            setIsLogin(true);
            navigate("/");
          }
          if (res.error.message === "Rejected") {
            setErrorMessage("Wrong username or password");
          }
        }
      );
    } else {
      if (
        !hasSpecialChars &&
        username.length > 6 &&
        password.length > 6 &&
        password === password2
      ) {
        dispatch(register({ name: username, password: password })).then(
          (res) => {
            if (res["payload"] === "username taken") {
              setErrorMessage("Username already in use");
            } else if (res["payload"] === 201) {
              setRegistered(true);
              setIsLogin(true);
              setErrorMessage("Register was successful");
              setUsername("");
              setPassword("");
              setPassword2("");
            }
          }
        );
      }
    }
    if (password !== password2 && !isLogin) {
      setErrorMessage("Password needs to be the same in both fields");
    }
    if (password < 6 && !isLogin) {
      setErrorMessage("Password needs to be at least 6 characters long");
    }
    if (username.length < 6 && !isLogin) {
      setErrorMessage("Username needs to be at least 6 characters long");
    }
    if (hasSpecialChars && !isLogin) {
      setErrorMessage("Username can contain only letters and numbers");
    }
    if (password.length < 6 && !isLogin) {
      setErrorMessage("Username can contain only letters and numbers");
    }
  };
  return (
    <div className="component-register-card-container">
      <p className="component-register-title">
        {isLogin ? "Sign in your account:" : "Sign up a new account"}
      </p>
      <input
        placeholder="Account"
        className="component-register-input-user"
        value={username}
        onChange={(e) => {
          e.preventDefault();
          setErrorMessage("");
          setRegistered(false);
          setUsername(e.target.value);
        }}
        type="text"
      ></input>
      <input
        placeholder="Password"
        className="component-register-input-pass"
        value={password}
        onChange={(e) => {
          e.preventDefault();
          setErrorMessage("");
          setRegistered(false);
          setPassword(e.target.value);
        }}
        type="password"
      ></input>
      {!isLogin && (
        <input
          placeholder="Password"
          className="component-register-input-pass"
          value={password2}
          onChange={(e) => {
            e.preventDefault();
            setErrorMessage("");
            setRegistered(false);
            setPassword2(e.target.value);
          }}
          type="password"
        ></input>
      )}
      <div className="component-register-button-container">
        <NavigateNextIcon onClick={handleRegister} />
      </div>
      <p
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin
          ? "New to this page? Create an account instead."
          : "Already have an account? Go to sign-in."}
      </p>
      {errorMessage && (
        <p
          style={{
            color: registered ? "green" : "red",
            fontSize: "16px",
            margin: "0",
            marginRight: "10%",
          }}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default RegisterCard;
