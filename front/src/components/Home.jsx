import React, { Component } from 'react';

// Composant de Post
class Post extends Component {
  render() {
    const { title, content, onDelete } = this.props;
    return (
      <div className="bg-white p-4 mb-4 shadow-md">
        <h2 className="text-xl font-bold w-400">{title}</h2>
        <p className="text-gray-600">{content}</p>
        <button className="bg-red-500 text-white px-2 py-1 mt-2" onClick={onDelete}>
          Supprimer
        </button>
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
      newPostTitle: '',
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
    const { newPostTitle, newPostContent, newPostCategory } = this.state;

    if (newPostTitle && newPostContent) {
      const newPost = {
        id: Date.now(),
        title: newPostTitle,
        content: newPostContent,
        category: newPostCategory,
      };

      this.setState((prevState) => ({
        posts: [...prevState.posts, newPost],
        newPostTitle: '',
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
    const { posts, selectedCategory, newPostTitle, newPostContent, newPostCategory } = this.state;

    const filteredPosts =
      selectedCategory === 'all'
        ? posts
        : posts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
      <div className="bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-6">Social Media Homepage</h1>

        <div className="flex space-x-4 mb-4">
          <button className={`px-4 py-2 rounded ${
              selectedCategory === 'all' ? 'bg-pink-500' : 'bg-pink-300'
            }`}
            onClick={() => this.handleCategoryChange('all')}
          >
            Tous
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'vacances' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('vacances')}
          >
            Vacances
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'famille' ? 'bg-rose-500' : 'bg-rose-300'
            }`}
            onClick={() => this.handleCategoryChange('famille')}
          >
            Famille
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'animaux' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('animaux')}
          >
            Animaux
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'cuisine' ? 'bg-rose-500' : 'bg-rose-300'
            }`}
            onClick={() => this.handleCategoryChange('cuisine')}
          >
            Cuisine
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedCategory === 'sport' ? 'bg-orange-500' : 'bg-orange-300'
            }`}
            onClick={() => this.handleCategoryChange('sport')}
          >
            Sport
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="newPostTitle" className="text-lg mr-2  black-text">
         
          Titre : </label> 
          <input
            type="text"
            id="newPostTitle"
            value={newPostTitle}
            onChange={(e) => this.handleNewPostChange(e, 'newPostTitle')}
            className="p-2 border border-white rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPostContent" className="text-lg mr-2">
          Contenu :
          </label>
          <textarea
            id="newPostContent"
            value={newPostContent}
            onChange={(e) => this.handleNewPostChange(e, 'newPostContent')}
            className="p-2 border border-white rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newPostCategory" className="text-lg mr-2">
            Catégorie :
          </label>
          <select
            id="newPostCategory"
            value={newPostCategory}
            onChange={(e) => this.handleNewPostChange(e, 'newPostCategory')}
            className="p-2 border border-white rounded "
          >
            <option value="vacances">Vacances</option>
            <option value="famille">Famille</option>
            <option value="animaux">Animaux</option>
            <option value="cuisine">Cuisine</option>
            <option value="sport">Sport</option>
          </select>
        </div>

        <button className="px-4 py-2 rounded bg-orange-500 text-white" onClick={this.handleNewPostSubmit}>
          Nouveau Post
        </button>

        {filteredPosts.map(post => (
          <Post key={post.id} title={post.title} content={post.content} onDelete={() => this.handleDeletePost(post.id)} />
        ))}
      </div>
    );
  }
}

export default Home;

