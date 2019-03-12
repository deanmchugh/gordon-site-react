import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './navbar/Navbar'
import Bio from './bio/Bio'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Bio />
      </div>
    );
  }
}

export default App;
