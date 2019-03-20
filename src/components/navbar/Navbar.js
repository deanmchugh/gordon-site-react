import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import menuIcon from './img/menu.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='navbar-home-item'>
          <Link to='/' alt='home'>
            <button>LISA GORDON</button>
          </Link>
          <div className='navbar-menu-item'>
            <img src={menuIcon} alt='menu'></img>
          </div>
        </div>
        <div className='navbar-item'>
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
        </div>
      </nav>
    )
  }
}
