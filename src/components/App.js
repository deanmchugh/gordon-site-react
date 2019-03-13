import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Bio from './bio/Bio'
import Contacts from './contacts/Contacts'
import Default from './Default'
import Footer from './footer/Footer'
import {Paintings, Drawings, Illustrations, Studies} from './gallary/Gallary'
import Navbar from './navbar/Navbar'

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
