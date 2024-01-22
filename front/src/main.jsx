import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <React.StrictMode>
      <App isAuthenticated={isAuthenticated} />
    </React.StrictMode>
  );
}

const root = document.getElementById('root');
if (root !== null) {
  createRoot(root).render(<Main />);
}