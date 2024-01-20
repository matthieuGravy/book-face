import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';





const Profile =() => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
      fetch('http://localhost:4900/wall')
          .then(response => {
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => setPosts(data))
          .catch(error => {
              console.log('Fetch error: ', error);
          });
  }, []);

    return ( 
      <>
      
        <div className=' relative pb-2  justify-center items-center bg-gradient-to-r from-slate-100 via-stone-300 to-zink-500'>
          <div className='flex flex-col pb-5'>
            <div className='relative flex flex-col mb-7'>
              <div className='flex flex-col lg:w-4/5 md:w-1/2 items-center flex-wrap text-center justify-center bg-slate-100 mx-auto'>
               
                <div className='profileInfo w-4/5 mt-20 h-60 mb-10 flex flex-col items-center justify-center'>
                  <img className='rounded-full w-60 h-60  shadow-xl object-cover '
                    src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2UlMjBwcm9maWxlfGVufDB8fDB8fHww" alt="user-pic" />
                  <div className='userName'>
                    <h3 className='text-xl pt-4'>Maria Bianchi</h3>
                  </div>
                  <div className='profileButton pb-6'>
                 
                    <button className='bg-gray-950  rounded btn text-gray-200' >
                      <FontAwesomeIcon icon={faUserPlus} /> 
                    follow
                    </button>
                    <button className="btn bg-gray-950 text-gray-200 rounded mr-4" onClick={()=>document.getElementById('my_modal_1').showModal()}> <FontAwesomeIcon icon={faUsers}/> contacts</button>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box bg-gray-200">
  <div className=" text-gray-200">Contacts</div>
      <p>
        {" "}
        Contact <button className="ms-10 text-gray-200 bg-gray-950 rounded">
          Block
        </button>{" "}
        <button className="ms-4 text-gray-200 bg-gray-950 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 text-gray-200 bg-gray-950 rounded">Block</button>
        <button className="ms-4 text-gray-200 bg-gray-950 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 text-gray-200 bg-gray-950 rounded">Block</button>
        <button className="ms-4 text-gray-200 bg-gray-950 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-gray-950 text-gray-200 rounded">Block</button>
        <button className="ms-4 bg-gray-950 text-gray-200 rounded">Delete</button>
      </p>{" "}
      <br />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-gray-950 text-gray-200 rounded">Close</button>
      </form>
    </div>
  </div>
</dialog>
                  </div>
                </div> 
              </div>
            </div>
            <div className='flex flex-row flex-wrap text-center justify-center'>
              <div className="sidebar w-full md:w-1/2 lg:w-1/4 bg-slate-50 p-4 rounded mr-2 ml-2">
                <h2 className='text-xl'>Personal Information</h2><br />
                <p>Username: Maria Bianchi </p> <br />
                <p>Email:maria@example.com </p><br />
                <p>Sexe: woman</p><br />
                <p>Téléphone: 1234567890 </p>
              <br  />
        
            <button className="btn bg-gray-950 text-gray-200 rounded mr-4" onClick={()=>document.getElementById('my_modal_2').showModal()}> <FontAwesomeIcon icon={faUsers}/> Edit Profile</button>
          
            <dialog id="my_modal_2" className="modal ">
  <div className="modal-box bg-gray-200">
  <div className=" text-gray-200">Contacts</div>
  <div className="grid gap-4 py-4">
          
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
            Email
            </label>
            <input id="email"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Sexe
            </label>
            <input id="sexe"  className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Telephone
            </label>
            <input id="telephone"  className="col-span-3" />
          </div>
        </div> 
        <div className="dialog-footer">
  <button className="btn bg-gray-950 text-gray-200 rounded" type="submit">Save changes</button>
</div>
      <br />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-gray-950 text-gray-200 rounded">Close</button>
      </form>
    </div>
  </div>

</dialog>
              <br /><br />  <hr className="border-black"/>  <br />
              <h1 className='text-xl'>Pictures</h1>
              </div>
              <div className="w-full  md:w-1/2 lg:w-2/4 bg-slate-50 p-4 rounded ml-2 mr-2 mt-4 md:mt-0 post">
              <div className="card w-full  bg-base-100 shadow-xl">
  <div className="card-body">
  {posts[1] && (
    <div key={posts[1].id}>
        <h3>{posts[1].description}</h3>
        <p>{posts[1].picture}</p>
    </div>
  )}
    
  <figure className='rounded max-h-80 '><img src="https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
  </div>
  
</div>
<hr className='my-1' />
<div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
  {posts[0] && (
    <div key={posts[0].id}>
        <h3>{posts[0].description}</h3>
        <p>{posts[0].content}</p>
    </div>
  )}
     <figure className='max-h-80 rounded'><img src="https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
  </div>
 
</div>
    </div>
             
            </div>
            
          </div>
        </div>
        
      </>
  );
}

export default Profile;