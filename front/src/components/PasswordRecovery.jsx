import React, { useState } from 'react';

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:4900/forgot/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from the API:", data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className=" h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gray-950 shadow-lg animate-pulse " />
          <div
            id="form-container"
            className="bg-white py-16 px-4 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
          >
            <h2
              id="form-title"
              className="text-center text-3xl font-bold mb-10 text-gray-800"
            >
              Password Recovery
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
              <button
                className="w-full h-12 bg-gray-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecovery;