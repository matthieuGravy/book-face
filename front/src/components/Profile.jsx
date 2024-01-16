import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage,faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import MyModal from './MyModal'

const randomImage = 'https://source.unsplash.com/1600x900/?900/?nature,water,sport'

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const Profile =() => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    useEffect(() => {
        fetch('http://localhost:4900/profile/:profileId/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return ( 
      <>
        <MyModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        <div className='h-screen relative pb-2  justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
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
                    <button className='bg-blue-600 w-24 h-10 rounded mr-4 button1' onClick={openModal} >
                      <FontAwesomeIcon icon={faUsers}/> contact
                    </button>
                    <button className='bg-blue-600 w-28 h-10 rounded' >
                      <FontAwesomeIcon icon={faUserPlus} /> 
                      Add Freind
                    </button>
                  </div>
                </div> 
              </div>
            </div>
            <div className='flex flex-row flex-wrap text-center justify-center'>
              <div className="sidebar w-full md:w-1/2 lg:w-1/4 bg-purple-200 p-4 rounded ml-2">
                <h2 className='text-xl'>Personal Information</h2><br />
                <p>Username: Riadh Trabelsi <button className='ms-10 bg-blue-500 rounded'>Modify</button></p> <br />
                <p>Email: riadh@example.com <button className='ms-6 bg-blue-500 rounded'>Modify</button></p><br />
                <p>Sexe: Men <button className='ms-36 bg-blue-500 rounded'>Modify</button></p><br />
                <p>Téléphone: 1234567890 <button className='ms-12 bg-blue-500 rounded'>Modify</button></p>
              </div>
              <div className="sidebar w-full md:w-1/2 lg:w-2/4 bg-purple-200 p-4 rounded ml-2 mt-4 md:mt-0 post">
                {posts.map(post => (
                  <div key={post.id}>
                    <img src={post.picture} alt="Post" />
                    <p>{post.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default Profile;