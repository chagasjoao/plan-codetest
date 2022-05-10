import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Admin from "../pages/Admin";

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
);

export default Router;
