import React from 'react';
import { Link } from 'react-router-dom';


const Signup =() => {
    return ( 
  
    <>
    <div className="h-screen py-20 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  <div className="relative">
    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse" />
    <div
      id="form-container"
      className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
    >
      <h2
        id="form-title"
        className="text-center text-3xl font-bold mb-10 text-gray-800"
      >
        SignUp
      </h2>
      <form className="space-y-5">
      <input
          className="w-full h-12 border border-gray-800 px-3 rounded-lg"
          placeholder="UserName"
          id=""
          name=""
          type="text"
        />
        <input
          className="w-full h-12 border border-gray-800 px-3 rounded-lg"
          placeholder="Email"
          id=""
          name=""
          type="text"
        />
        <input
          className="w-full h-12 border border-gray-800 px-3 rounded-lg"
          placeholder="Password"
          id=""
          name=""
          type="password"
        />
          <button
        className="w-full h-12 [background:linear-gradient(144deg,#af40ff,#5b42f3_50%,#00ddeb)] text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
  SignUp
      </button>
      
      </form>
    </div>
  </div>
</div>
</>
  );
}

    

export default Signup;