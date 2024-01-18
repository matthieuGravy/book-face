import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile";
import PasswordRecovery from "./components/PasswordRecovery";
import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="Signup" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Login" element={<Login />} />
        <Route path="PasswordRecovery" element={<PasswordRecovery />} />
        <Route path="/" element={<Home />} />
        <Route path="LandingPage" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
