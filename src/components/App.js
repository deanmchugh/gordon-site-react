import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Bio from './bio/Bio'
import Contacts from './contacts/Contacts'
import Default from './Default'
import Drawings from './gallary/Drawings'
import Footer from './footer/Footer'
import Illustrations from './gallary/Illustrations'
import Navbar from './navbar/Navbar'
import Paintings from './gallary/Paintings'
import Studies from './gallary/Studies'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Bio}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/paintings' component={Paintings}/>
          <Route path='/drawings' component={Drawings}/>
          <Route path='/illustrations' component={Illustrations}/>
          <Route path='/studies' component={Studies}/>
          <Route component={Default}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
