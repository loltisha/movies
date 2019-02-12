/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

import MovieList from './movielist';
class App extends Component {
  render() {
   


    return (
      <div>
        {/* <h1>Movies List</h1> */}
        <MovieList />
       
        {/* <Movie />
        <Movie /> */}
      </div>
  
  
    );
  }
}

export default App;
