import React from "react";

// LIBRARIES
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/appRoutes";

// COMPONENTS

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#181923", height: "100vh" }}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
