import React from "react";

// LIBRARIES
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/appRoutes";

// COMPONENTS

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
