import React from "react";
import LogIn from "pages/LogIn";
import Orders from "pages/Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
