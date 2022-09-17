import React from "react";

// LIBRARIES
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRoutes from "./config/appRoutes";

// COMPONENTS

const App = () => {
  let height = window.innerHeight;
  console.log(height);
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#181923", height: "100vh" }}>
        <Header style={{ top: "0px", position: "sticky", zIndex: "99" }} />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
