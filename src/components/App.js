import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
