import React from 'react';
import { Link } from 'react-router-dom';
const Footer =() => {
    return (
        <footer className="footer pl-4  items-center relative bottom-0 bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500 text-gray-950  ">
   <Link to= "/">
   <h1 className="font-mono md:text-3xl lg:text-5xl"style={{ fontFamily: 'Sevillana', cursive: 'cursive' }}>Life Vibes</h1>
   </Link> <p>Copyright © 2024 - All right reserved</p>

 
</footer>
    )
}

export default Footer