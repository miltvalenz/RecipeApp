import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = 'b6840015';
  const APP_KEY = '9114db96a774f8bfa1ec02f93c0c46c3';

  const [recipes, setRepices] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRepices(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="app">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
