import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

import MainImg from './mainPage.jpg';

const App = () => {
  const APP_ID = 'b6840015';
  const APP_KEY = '9114db96a774f8bfa1ec02f93c0c46c3';

  const [recipes, setRepices] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  {/** 
useEffect(() => {
    getRecipes();
  }, [query]);
*/}


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRepices(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <div className="container-main-page">
        <img src={MainImg} alt="main" className="img-main-page" />
        <div className="title-container">
          <div class="title">la recette</div>
          <div className="sub-title">the best recipes for your day</div>
          <form onSubmit={getSearch} className="search-form">
            <input type="text" className="search-bar" value={search} onChange={e => updateSearch(e)} />
            <button className="search-button" type="submit">Search</button>
          </form>
        </div>
        <div className="credit-photo">Photo by Brooke Lark on Unsplash</div>

      </div>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={e => updateSearch(e)} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
