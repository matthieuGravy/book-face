import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, content, image, onDelete } = this.props;
    return (
      <div className="bg-white p-4 mb-4 shadow-md mx-auto md:w-1/2 lg:w-3/5" style={{ borderRadius: '10px' }}>
        <div className="flex flex-wrap items-center mb-2">
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Post"
              className="mb-2 w-1/5 md:w-1/4 lg:w-1/6 rounded"
              style={{ maxWidth: '100%', flexShrink: 0 }}
            />
          )}
          <div className="flex-grow ml-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-gray-600">{content}</p>
          </div>
          <button
            className="bg-fuchsia-900 text-white px-2 py-1 rounded-md text-xs md:text-sm"
            onClick={onDelete}
          >
            Supprimer
          </button>
        </div>
      </div>
    );
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'Tous',
      posts: [
        { id: 1, title: 'Vacances à la plage', content: <strong>'Hello'</strong>, category: 'vacances' },
        { id: 2, title: 'Recette de cuisine', content: <strong>'Miam'</strong>, category: 'cuisine' },
        { id: 3, title: 'Famille heureuse', content: <strong>'Coucou'</strong>, category: 'famille' },
        { id: 4, title: 'Entraînement sportif', content: <strong>'Youpie'</strong>, category: 'sport' },
        { id: 5, title: 'Animaux adorables', content: <strong>'Wouf-Wouf'</strong>, category: 'animaux' },
      ],
      newPostContent: '',
      newPostCategory: 'vacances',
      selectedImage: null,
      isSidebarOpen: false,
      username: 'Riadh Trabelsi',
      onlineContacts: [
        { id: 1, name: 'Prescillia' },
        { id: 2, name: 'Matthieu' },
        { id: 3, name: 'Pressy' },
        { id: 4, name: 'Mat' },
        { id: 5, name: 'Joseph' },
        { id: 6, name: 'Alphonse' },
      ],
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleNewPostChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleImageChange = (event) => {
    const file = event.target.files[0];
    this.setState({ selectedImage: file });
  };

  handleNewPostSubmit = () => {
    const { newPostContent, newPostCategory, selectedImage } = this.state;

    if (newPostContent) {
      const newPost = {
        id: Date.now(),
        title: 'N/A',
        content: newPostContent,
        category: newPostCategory,
        image: selectedImage,
      };

      this.setState((prevState) => ({
        posts: [newPost, ...prevState.posts],
        newPostContent: '',
        newPostCategory: 'vacances',
        selectedImage: null,
      }));
    }
  };

  handleDeletePost = (postId) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== postId),
    }));
  };

  handleToggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    const { posts, selectedCategory, newPostContent, newPostCategory, selectedImage, isSidebarOpen, username, onlineContacts } = this.state;

    const filteredPosts =
      selectedCategory === 'Tous'
        ? posts
        : posts.filter((post) => post.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
      <div className="bg-black text-white p-8 relative">
        <h1 className="text-5xl text-center text-white-500 font-bold mb-6 animate-bounce text-4xl text-center" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', border: '2px solid black' }}>
          Home page
        </h1>

        <button
          className={` animate-pulse fixed top-20 right-8 p-4 text-white bg-fuchsia-500 rounded-full text-sm md:text-base ${isSidebarOpen ? 'opacity-40' : 'opacity-100'}`}
          onClick={this.handleToggleSidebar}
        >
          {isSidebarOpen ? 'Fermer' : 'Menu'}
        </button>

        <div
          className={`fixed top-24 right-0 h-full bg-pink-800 p-4 transition-transform transform ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          } rounded-l-3xl opacity-75`}
          style={{ width: '200px' }}
        >
          <div className="text-white">
            <p>
              <strong>Welcome,</strong> <br /> {username}
            </p>
            <br />
            <br />
            <br />
            <p>
              <strong>Contacts en ligne</strong>
            </p>{' '}
            <br />
            <ul>
              {onlineContacts.map((contact) => (
                <li key={contact.id} className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  {contact.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center space-x-2 mb-4">
          {['Tous', 'vacances', 'famille', 'animaux', 'cuisine', 'sport'].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${selectedCategory === category ? 'bg-pink-500' : 'bg-pink-300'} mb-2 md:mb-0 md:mr-2`}
              onClick={() => this.handleCategoryChange(category)}
              style={{
                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-12 mb-4 w-full md:w-1/2 mx-auto bg-fuchsia-900 rounded" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)' }}>
          <div className="flex flex-col mb-4">
            <label htmlFor="newPostContent" className="text-lg mr-2">
              NOUVEAU POST :
            </label>
            <textarea
              id="newPostContent"
              value={newPostContent}
              onChange={(e) => this.handleNewPostChange(e, 'newPostContent')}
              className="p-2 border border-white rounded text-black bg-gray-200 mb-4 w-full"
            />
          </div>

          <div className="flex items-end mb-4">
            <label htmlFor="newPostImage" className="text-lg mr-2">
              Image :
            </label>
            <input
              type="file"
              id="newPostImage"
              accept="image/*"
              onChange={this.handleImageChange}
              className="border border-white rounded text-black bg-fuchsia-900 rounded mb-4"
              style={{ borderRadius: '8px', padding: '8px' }}
            />
          </div>

          <div className="flex items-end">
            <label htmlFor="newPostCategory" className="text-lg mr-2">
              Catégorie :
            </label>
            <select
              id="newPostCategory"
              value={newPostCategory}
              onChange={(e) => this.handleNewPostChange(e, 'newPostCategory')}
              className="border border-white rounded text-black bg-fuchsia-900 rounded mb-4"
              style={{ borderRadius: '8px' }}
            >
              <option value="vacances">Vacances</option>
              <option value="famille">Famille</option>
              <option value="animaux">Animaux</option>
              <option value="cuisine">Cuisine</option>
              <option value="sport">Sport</option>
            </select>
          </div>
        </div>

        <button
          className="mx-auto block px-16 py-3 rounded bg-pink-700 text-white mt-10 mb-20 text-sm md:text-base"
          onClick={this.handleNewPostSubmit}
          style={{
            boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
          }}
        >
          Envoyer Post
        </button>

        {filteredPosts.map((post) => (
          <Post key={post.id} title={post.title} content={post.content} image={post.image} onDelete={() => this.handleDeletePost(post.id)} />
        ))}
      </div>
    );
  }
}

export default Home;
