import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PasswordRecovery from "./components/PasswordRecovery";
import Home from "./components/Home";
import Landing from "./components/Landing";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Landing /></>} />
        <Route path="Signup" element={<><NavBar /><Signup /><Footer /></>} />
        <Route path="Profile" element={<><NavBar /><Profile /><Footer /></>} />
        <Route path="Login" element={<><NavBar /><Login /><Footer /></>} />
        <Route path="PasswordRecovery" element={<><NavBar /><PasswordRecovery /><Footer /></>} />
        <Route path="home" element={<><NavBar /><Home /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;