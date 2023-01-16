import React from 'react';
import Header from './components/header'
import SearchBar from './features/search_bar/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='row'>
          <SearchBar/>
        </div>
      </div>
    </div>
  );
}

export default App;
