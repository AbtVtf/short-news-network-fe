import React from "react";

// LIBRARIES
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./config/appRoutes";

// COMPONENTS

const App = () => {
  return (
    <BrowserRouter>
      <div className="test">
        <Header />
      </div>
      <div className="test2">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
