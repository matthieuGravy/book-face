import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage,faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';


const randomImage = 'https://source.unsplash.com/1600x900/?900/?nature,water,sport'



const Profile =() => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
      fetch('http://localhost:4900/profile/posts')
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
      
        <div className=' relative pb-2  justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
          <div className='flex flex-col pb-5'>
            <div className='relative flex flex-col mb-7'>
              <div className='flex flex-col justify-center items-center'>
                <img src={randomImage} 
                  className='w-full h-60 2xl:h-510 shadow-lg object-cover'
                  alt="hello" />
                <div className='profileInfo w-4/5 bg-purple-300 -mt-24 h-60 rounded-xl flex flex-col items-center justify-center'>
                  <img className='rounded-full w-40 h-40  shadow-xl object-cover -mt-40'
                    src="https://thumbs.dreamstime.com/b/welcome-to-riyadh-message-beautiful-colored-modern-gradients-vector-illustration-129180103.jpg" alt="user-pic" />
                  <div className='userName'>
                    <h3 className='text-xl pt-4'>Riadh Trabelsi</h3>
                  </div>
                  <div className='profileButton pt-4'>
                 
                    <button className='bg-blue-600  rounded btn' >
                      <FontAwesomeIcon icon={faUserPlus} /> 
                      Add Freind
                    </button>
                    <button className="btn bg-blue-600  rounded mr-4" onClick={()=>document.getElementById('my_modal_1').showModal()}> <FontAwesomeIcon icon={faUsers}/> contacts</button>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box bg-purple-200">
  <div className="text-xl">Contacts</div>
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">
          Block
        </button>{" "}
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
      <p>
        {" "}
        Contact <button className="ms-10 bg-blue-500 rounded">Block</button>
        <button className="ms-4 bg-blue-500 rounded">Delete</button>
      </p>{" "}
      <br />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn bg-blue-500 rounded">Close</button>
      </form>
    </div>
  </div>
</dialog>
                  </div>
                </div> 
              </div>
            </div>
            <div className='flex flex-row flex-wrap text-center justify-center'>
              <div className="sidebar w-full md:w-1/2 lg:w-1/4 bg-purple-200 p-4 rounded mr-2 ml-2">
                <h2 className='text-xl'>Personal Information</h2><br />
                <p>Username: Riadh Trabelsi <button className='ms-10 bg-blue-500 rounded'>Modify</button></p> <br />
                <p>Email: riadh@example.com <button className='ms-6 bg-blue-500 rounded'>Modify</button></p><br />
                <p>Sexe: Men <button className='ms-36 bg-blue-500 rounded'>Modify</button></p><br />
                <p>Téléphone: 1234567890 <button className='ms-12 bg-blue-500 rounded'>Modify</button></p>
              <br  />
            <hr className="border-black"/>
              <br />
              <h1 className='text-xl'>Pictures</h1>
              </div>
              <div className="w-full h-screen md:w-1/2 lg:w-2/4 bg-purple-200 p-4 rounded ml-2 mr-2 mt-4 md:mt-0 post">
        <div>
            {posts.map(post => (
                <div key={post.id}> {/* Assurez-vous que chaque post a une propriété 'id' unique */}
                    <h3>{post.description}</h3>
                    <p>{post.content}</p>
                    {/* Ajoutez d'autres éléments à afficher si nécessaire */}
                </div>
            ))}
        </div>
    </div>
             
            </div>
            
          </div>
        </div>
        
      </>
  );
}

export default Profile;