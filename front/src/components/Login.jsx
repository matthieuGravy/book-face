
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:4900/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    

    const data = await response.json();
    console.log(data); // Ajout du console.log ici

    // Vous pouvez également vérifier le statut de la réponse pour voir si la requête a réussi
    if (data.connected) {
      console.log('Login successful');
      navigate('/home');
    } else {
      console.log('Login failed');
    }

    // Handle response here
  };
    return ( 
    <>
    <div className="h-screen   flex items-center justify-center bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500">
  <div className="relative">
    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg" />
    <div
      id="form-container"
      className="bg-white py-16 px-4 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
    >
      <h2
        id="form-title"
        className="text-3xl font-bold mb-10 text-gray-800 "
      >
        Login
      </h2>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
        className="w-full h-12 border border-gray-800 px-3 rounded-lg"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        />
        <input
          className="w-full h-12 border border-gray-800 px-3 rounded-lg"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
          <button
        className="w-full h-12 bg-gray-950 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
    Login
      </button>
        <br />
        <Link className="text-gray-950 hover:text-blue-800 text-sm" to="/PasswordRecovery">
          Forgot Password?
        </Link>
        <hr />
        <Link  className="text-gray-950 hover:text-blue-800 text-sm" to="/PasswordRecovery" >
                  Don't have an account? Sign Up
                </Link>
      </form>
    </div>
  </div>
</div>
</>
  );
}

    

export default Login;
/*
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:4900/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    // Handle response here
  };

  return (
    // ...
    <form className="space-y-5" onSubmit={handleSubmit}>
      <input
        className="w-full h-12 border border-gray-800 px-3 rounded-lg"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
      />
      <input
        className="w-full h-12 border border-gray-800 px-3 rounded-lg"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button
        className="w-full h-12 [background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
        Login
      </button>
     
    </form>
    */