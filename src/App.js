import React from 'react';
import './App.css';

const App = () => {
  const APP_ID = 'b6840015';
  const APP_KEY = '9114db96a774f8bfa1ec02f93c0c46c3';

  return (
    <div className="app">
      <form action="" className="search-form">
        <input type="text" className="search-bar" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
