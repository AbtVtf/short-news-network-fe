import React, { useEffect } from "react";

// LIBRARIES
import { Routes, Route, useLocation } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header/Header";
import Article from "../view/Article/Article";
import Feed from "../view/Feed/Feed";

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
    </Routes>
  );
};

export default AppRoutes;
