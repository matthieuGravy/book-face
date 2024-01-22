import React from "react";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <>
      <main className="flex flex-row flex-wrap text-center justify-center h-screen  bg-slate-50 p-8 rounded">
        <figure className=" w-full md:w-1/2 lg:w-3/6 bg-slate-50   ">
          <img src="src/images/meet1.svg" alt="meet" />
        </figure>
        <section className="grid place-items-center w-full lg:h-36 md:w-1/2 lg:w-2/6 bg-slate-50 ">
          <h1 className=" text-4xl lg:text-7xl font-serif"> Life Vibes</h1> <br />
          <h3 className="pb-3 text-lg lg:text-xl  font-mono">
            Vibrant online community where users connect, share, and engage in
            meaningful conversations. Dive into a world of positive
            interactions, where members can discover and celebrate shared
            interests. Unleash your creativity, build connections, and amplify
            your social experience with Social Vibes. Join us in shaping a space
            filled with positive energy and exciting connections.
          </h3>
        
          <Link to="/Login">
            {" "}
            <button className="btn btn-outline bg-gray-950 text-gray-100 w-48">
              Login{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}

export default Landing;
