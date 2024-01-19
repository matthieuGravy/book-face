import React, { useState } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
              Reset Password
            </h2>
            <form className="space-y-5">
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
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

export default ResetPassword;