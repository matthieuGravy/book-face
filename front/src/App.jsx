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
import Landing from "./components/Landing";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Login" element={<Login />} />
        <Route path="PasswordRecovery" element={<PasswordRecovery />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
