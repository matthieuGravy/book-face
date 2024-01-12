import React from 'react';


const randomImage = 'https://source.unsplash.com/1600x900/?900/?nature,water,sport'

const Profile =() => {
    return ( 
      <>
  <div className='h-screen relative pb-2  justify-center items-center'>
    <div className='flex flex-col pb-5'>
      <div className='relative flex flex-col mb-7'>
        <div className='flex flex-col justify-center items-center'>
        <img src={randomImage} 
    className='w-full h-80 2xl:h-510 shadow-lg object-cover'
    alt="hello" />
  <img className='rounded-full w-40 h-40 -mt-10 shadow-xl object-cover'
    src="https://thumbs.dreamstime.com/b/welcome-to-riyadh-message-beautiful-colored-modern-gradients-vector-illustration-129180103.jpg" alt="user-pic" />
      <h1>riadh</h1>
        </div>
      </div>

    </div>
  </div>
       </>
      
      
  );
}

    

export default Profile;