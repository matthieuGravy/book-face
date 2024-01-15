import React, { Component } from 'react';

// Composant de Post
class Post extends Component {
  render() {
    const { title, content, onDelete } = this.props;
    return (
      <div className="bg-white p-4 mb-4 shadow-md mx-auto" style={{ width: '70%', borderRadius: '10px' }}>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold w-400">{title}</h2>
          <button
            className="bg-fuchsia-900 text-white px-2 py-1 rounded-md"
            onClick={onDelete}
            style={{ fontSize: '0.8rem' }}
          >
            Supprimer
          </button>
        </div>
        <p className="text-gray-600">{content}</p>
      </div>
    );
  }
}

// Composant de la Homepage
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'all',
      posts: [
        { id: 1, title: 'Vacances à la plage', content: 'Hello', category: 'vacances' },
        { id: 2, title: 'Recette de cuisine', content: 'Miam', category: 'cuisine' },
        { id: 3, title: 'Famille heureuse', content: 'Coucou', category: 'famille' },
        { id: 4, title: 'Entraînement sportif', content: 'Youpie', category: 'sport' },
        { id: 5, title: 'Animaux adorables', content: 'Wouf-Wouf', category: 'animaux' },
      ],
      newPostContent: '',
      newPostCategory: 'vacances',
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleNewPostChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleNewPostSubmit = () => {
    const { newPostContent, newPostCategory } = this.state;

    if (newPostContent) {
      const newPost = {
        id: Date.now(),
        title: 'N/A', // Titre non spécifié
        content: newPostContent,
        category: newPostCategory,
      };

      this.setState((prevState) => ({
        posts: [newPost, ...prevState.posts],
        newPostContent: '',
        newPostCategory: 'vacances',
      }));
    }
  };

  handleDeletePost = (postId) => {
    this.setState((prevState) => ({
      posts: prevState.posts.filter(post => post.id !== postId),
    }));
  };

  render() {
    const { posts, selectedCategory, newPostContent, newPostCategory } = this.state;

    const filteredPosts =
      selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
      <div className="bg-black text-white p-8">
        <h1 className="text-5xl text-center text-white-500 font-bold mb-6" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', border: '2px solid black' }}> Home page</h1>

        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'all' ? 'bg-pink-500' : 'bg-pink-300'
            }`}
            onClick={() => this.handleCategoryChange('all')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Tous
          </button>
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'vacances' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('vacances')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Vacances
          </button>
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'famille' ? 'bg-rose-500' : 'bg-rose-300'
            }`}
            onClick={() => this.handleCategoryChange('famille')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Famille
          </button>
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'animaux' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('animaux')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Animaux
          </button>
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'cuisine' ? 'bg-rose-500' : 'bg-rose-300'
            }`}
            onClick={() => this.handleCategoryChange('cuisine')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Cuisine
          </button>
          <button
            className={`px-6 py-3 rounded ${
              selectedCategory === 'sport' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('sport')}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Sport
          </button>
        </div>

        <div className="mt-12 mb-4 w-1/2 mx-auto bg-fuchsia-900 rounded" style={{ boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)' }}>
  <div className="flex flex-col mb-4">
    <label htmlFor="newPostContent" className="text-lg mr-2">
      NOUVEAU POST :
    </label>
    <textarea
      id="newPostContent"
      value={newPostContent}
      onChange={(e) => this.handleNewPostChange(e, 'newPostContent')}
      className="p-2 border border-white rounded text-black bg-gray-200 mb-4 w-auto"
    />
  </div>

  <div className="flex items-end">
    <label htmlFor="newPostCategory" className="text-lg mr-2">Catégorie :</label>
    <select
      id="newPostCategory"
      value={newPostCategory}
      onChange={(e) => this.handleNewPostChange(e, 'newPostCategory')}
      className="border border-white rounded text-black bg-fuchsia-900 rounded mb-4"
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
            className="mx-auto block px-32 py-4 rounded bg-pink-700 text-white mt-10 mb-20"
            onClick={this.handleNewPostSubmit}
            style={{
              boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              fontSize: '1.2rem',
            }}
          >
            Envoyer Post
          </button>
        

        {filteredPosts.map(post => (
          <Post key={post.id} title={post.title} content={post.content} onDelete={() => this.handleDeletePost(post.id)} />
        ))}
      </div>
    );
  }
}

export default Home;

