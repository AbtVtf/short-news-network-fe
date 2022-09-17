import React, { useEffect } from "react";

// LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header/Header";
import Article from "../view/Article/Article";
import Feed from "../view/Feed/Feed";
import RegisterPage from "../view/RegisterPage/RegisterPage";

const AppRoutes = () => {
  // CONSTANTS USING HOOKS
  const { pathname } = useLocation();

  // USE EFFECT FUNCTIONS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Feed />} />

      <Route path="/article/:id" element={<Article />} />

      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
