import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Profile from './components/Profile';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


