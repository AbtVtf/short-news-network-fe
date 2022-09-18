import React from "react";

// LIBRARIES
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./config/appRoutes";

// COMPONENTS

const App = () => {
  let height = window.innerHeight;
  console.log(height);
  return (
    <BrowserRouter>
      <div className="test">
        <Header />
      </div>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
