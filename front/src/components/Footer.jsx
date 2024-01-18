import React from 'react';
import { Link } from 'react-router-dom';
const Footer =() => {
    return (
        <footer className="footer  items-center relative bottom-0 bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500 text-gray-950  text-neutral-content ">
   <Link to= "/">
  <img src="src\images\FoodieMedia.png" alt="" className="w-10" />
   </Link> <p>Copyright © 2024 - All right reserved</p>

 
</footer>
    )
}

export default Footer