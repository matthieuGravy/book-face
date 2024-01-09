import "./index.css";

function App() {
  return (
    <>
    
    <div className="navbar bg-gray-800">
  <div className="flex-1">
   
    <img src="src\images\FoodieMedia.png" alt="" className="w-16" />
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>  <button className="btn btn-outline bg-gray-100 ">Home</button>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<div className="bg-gray-600 py-5">
<div className="max-w-md mx-auto relative overflow-hidden z-10  bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
  <h2 className="text-2xl font-bold text-white mb-6">Signup</h2>
  <form method="post" action="#">
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-300" htmlFor="name">
        Username
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        type="text"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="email"
      >
       Password
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        name="email"
        id="email"
        type="email"
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-300"
        htmlFor="email"
      >
       Email
      </label>
      <input
        className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
        name="email"
        id="email"
        type="email"
      />
    </div>
 
    <div className="flex justify-end">
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
Signup
      </button>
    </div>
  </form>
</div></div>
<footer className="footer items-center p-4 absolute bottom-0 bg-gray-800 mb-0 text-neutral-content">
 
  <img src="src\images\FoodieMedia.png" alt="" className="w-10" />
    <p>Copyright © 2024 - All right reserved</p>

 
</footer>
    </>
  );
}

export default App;
