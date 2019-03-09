import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar-display'>
        <Link to='/' alt='home'>
            <button className='home-button'>LISA GORDON</button>
        </Link>
        <Link to='/paintings' alt='paintings'>
            <button>PAINTINGS</button>
        </Link>
        <Link to='/drawings' alt='drawings'>
            <button>DRAWINGS</button>
        </Link>
        <Link to='/illustrations' alt='illustrations'>
            <button>ILLUSTRATIONS</button>
        </Link>
        <Link to='/studies' alt='studies'>
            <button>STUDIES</button>
        </Link>
        <Link to='/contacts' alt='contacts'>
            <button>CONTACTS</button>
        </Link>
      </nav>
    )
  }
}
