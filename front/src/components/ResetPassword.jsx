import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = new URLSearchParams(location.search).get("email");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("email", email);

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:4900/forgot", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          newPassword: password,
          confirmPassword: confirmPassword,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from the API:", data);
      if (data.passwordChanged) {
        alert("Password changed successfully!");
        setTimeout(() => {
          console.log("navigate to login");
          navigate("/login");
        }, 1500);
      } else {
        alert("Password change was not successful. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <section className=" h-screen flex items-center justify-center bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500">
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
            Reset Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
            <input
              className="w-full h-12 border border-gray-800 px-3 rounded-lg"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
            <button
              className="w-full h-12 bg-gray-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
