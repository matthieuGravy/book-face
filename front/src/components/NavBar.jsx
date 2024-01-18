import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =() => {
    return (
        
       
        <div className="navbar bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500">
          
      
      
  <div className="flex-1">
   <Link to= "/home">
    <img src="src/images/logo1.jpg" alt="" className="w-16 h-50" />
 </Link> </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> <Link to="/home"> <button className="btn btn-outline bg-gray-950 text-gray-100 ">Home</button></Link>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://thumbs.dreamstime.com/z/image-de-profil-d-avatar-visage-fille-noire-et-blanche-afro-am%C3%A9ricaine-avec-le-petit-pain-portrait-sourire-personnage-dessin-149736143.jpg" />
        </div>
      </div>
    
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
       
        <li>
            <Link to="/profile">
                  Profile 
                </Link>
                </li>
        
                <li>  <Link to="/Login">
                Login
                </Link></li>
        <li>  <Link to="Signup">
                  Don't have an account? Sign Up
                </Link></li>
      </ul>
    </div>
  </div>
</div>

    )
}

export default NavBar