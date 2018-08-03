import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Components/Recipe';
import '../node_modules/font-awesome/css/font-awesome.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Recipe />
      </div>
    );
  }
}

export default App;
