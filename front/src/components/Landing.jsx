import React from 'react'
import { Link } from 'react-router-dom';
function Landing() {
  return (
   <> 
    <div className='flex flex-row text-center justify-center h-screen '>
    <div className="sidebar  w-full md:w-1/2 lg:w-2/4 bg-slate-50 p-4 rounded  ">
    <img src="src/images/Landing.svg" alt="meet" />
        </div>
        <div className="w-full  md:w-1/2 lg:w-2/4 bg-slate-50 p-4 rounded  mr-2 mt-4 md:mt-0 post">
            <h1 className=''>Welcome to Life vive</h1>
<h3>Social Vibes is a vibrant online community where users connect, share, and engage in meaningful conversations. Dive into a world of positive interactions, where members can discover and celebrate shared interests. Unleash your creativity, build connections, and amplify your social experience with Social Vibes. Join us in shaping a space filled with positive energy and exciting connections.</h3>
<Link to="/Login"> <button className="btn btn-outline bg-gray-950 text-gray-100 ">Login</button></Link>
            </div>
        </div>
    
    </>
  )
}

export default Landing