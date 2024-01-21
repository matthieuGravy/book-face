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
import ResetPassword from './components/ResetPassword';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const token = localStorage.getItem('jwt');
    return token != null;
  });
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Landing /></>} />
        <Route path="Signup" element={<><NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} /><Signup /><Footer /></>} />
        <Route path="Profile" element={<><NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} /><Profile /><Footer /></>} />
        <Route path="Login" element={<><NavBar handleLogout={handleLogout} /><Login onLogin={() => setIsAuthenticated(true)} /><Footer /></>} />
        <Route path="PasswordRecovery" element={<><NavBar handleLogout={handleLogout} /><PasswordRecovery /><Footer /></>} />
        <Route path="home" element={<><NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} /><Home isAuthenticated={isAuthenticated} /><Footer /></>} />
        <Route path="ResetPassword" element={<><NavBar handleLogout={handleLogout} /><ResetPassword /><Footer /></>} />
      </Routes>
    </Router>
  );
};

export default App;