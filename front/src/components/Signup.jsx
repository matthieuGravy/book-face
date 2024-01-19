import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(`Envoi des données : ${username}, ${email}, ${password}`);

    try {
      const response = await fetch("http://localhost:4900/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Réponse de l'API :", data);
    } catch (error) {
      console.error("Une erreur est survenue :", error);
    }
  };
  return (
    <div className="h-screen py-20 flex items-center justify-center bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500">
      <div className="relative">
      <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gray-950 shadow-lg animate-pulse" />
    <div
      id="form-container"
      className="bg-white py-16 px-4 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
    >
          <h2
            id="form-title"
            className=" text-3xl font-bold mb-10 text-gray-800"
          >
            SignUp
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              id="username"
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <input
              id="email"
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              
            />
            <input
              id="password"
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
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
