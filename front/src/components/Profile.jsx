import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faTags, faSmile } from '@fortawesome/free-solid-svg-icons';
const randomImage = 'https://source.unsplash.com/1600x900/?900/?nature,water,sport'

const Profile =() => {
    return ( 
      <>
  <div className='h-screen relative pb-2  justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
    <div className='flex flex-col pb-5'>
      <div className='relative flex flex-col mb-7'>
        <div className='flex flex-col justify-center items-center'>
        <img src={randomImage} 
    className='w-full h-80 2xl:h-510 shadow-lg object-cover'
    alt="hello" />
  <img className='rounded-full w-40 h-40 -mt-10 shadow-xl object-cover'
    src="https://thumbs.dreamstime.com/b/welcome-to-riyadh-message-beautiful-colored-modern-gradients-vector-illustration-129180103.jpg" alt="user-pic" />
      <h1>riadh trabelsi</h1> 
     
    <form  className=''>
      <div className='user form'>
        <img src="{currentUserData.map(user=>(user.profileImage))}" alt = ""/>
        <input type="text" placeholder='what do you think?'/>
        <button type='submit' className='bg-blue-600'>Post</button>
       <div className='post-categories'>
        <label htmlFor="file">
        <input type="file" />
        <span><FontAwesomeIcon icon={faImage}/></span> 
         <span><FontAwesomeIcon icon={faVideo}/></span> 
         <span><FontAwesomeIcon icon={faTags}/></span> 
         <span><FontAwesomeIcon icon={faSmile}/></span> 
     </label>
       </div>
      </div>
    </form>
        </div>
      </div>

    </div>
  </div>
 
       </>
      
      
  );
}

    

export default Profile;