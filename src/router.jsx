import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutUs, Dashboard, Home } from "../src/pages";
import { Navbar, Footer } from "./components";

const MyRouter = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default MyRouter;
