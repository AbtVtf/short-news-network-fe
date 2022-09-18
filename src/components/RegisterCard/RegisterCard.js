import React, { useState } from "react";

// STYLES
import "./RegisterCard.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../api/userApi";
import { handleLogin } from "../../api/sessionApi";
import { message } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { handleChangeUsername } from "../../slices/sessionSlice";
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
      dispatch(handleLogin({ name: username, password: password }));
      dispatch(handleChangeUsername(username));
      navigate("/");
    } else {
      dispatch(register({ name: username, password: password })).then((res) => {
        if (res["payload"] === "username taken") {
          console.log("taken");
          setErrorMessage("Username already in use");
        } else if (res["payload"] === 201) {
          setIsLogin(true);
          setErrorMessage("Register was successful");

          setUsername("");
          setPassword("");
        }
      });
      // if (!hasSpecialChars && username.length > 6 && password.length > 6) {

      // }
    }

    // if (password < 6 && !isLogin) {
    //   setErrorMessage("Password needs to be at least 6 characters long");
    // }
    // if (username.length < 6 && !isLogin) {
    //   setErrorMessage("Username needs to be at least 6 characters long");
    // }
    // if (hasSpecialChars && !isLogin) {
    //   setErrorMessage("Username can contain only letters and numbers");
    // }
  };
  return (
    <div className="component-register-card-container">
      <p className="component-register-title">
        {isLogin ? "Sign in your account:" : "Sign up a new account"}
      </p>
      <p className="component-register-input-label">Account:</p>
      <input
        className="component-register-input-user"
        value={username}
        onChange={(e) => {
          e.preventDefault();
          setErrorMessage("");
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

      <div className="component-register-button-container">
        <NavigateNextIcon onClick={handleRegister} />
      </div>
      <p
        style={{ color: "white", fontSize: "15px", margin: "0" }}
        onClick={() => {
          setIsLogin(!isLogin);
        }}
      >
        {isLogin
          ? "New to this page? Create an account."
          : "Already have an account? Go to sign-in."}
      </p>
      {errorMessage && (
        <p
          style={{
            color: "red",
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
