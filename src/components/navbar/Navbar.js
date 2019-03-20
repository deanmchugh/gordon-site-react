import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import menuIcon from './img/menu.png'

export default class Navbar extends Component {
  render() {

    function toggleMenu() {
      const navs = document.querySelectorAll('.navbar-item')
      navs.forEach(nav => nav.classList.toggle('navbar-item-toggle'))
    }

    return (
      <nav className='navbar'>
        <div className='navbar-home-item'>
          <Link to='/' alt='home'>
            <button className='name'>LISA GORDON</button>
          </Link>
          <div className='navbar-toggle' onClick={toggleMenu}>
            <img src={menuIcon} alt='menu'></img>
          </div>
        </div>
        <div className='navbar-item'>
          <Link to='/paintings' alt='paintings' onClick={toggleMenu}>
            <button>PAINTINGS</button>
          </Link>
          <Link to='/drawings' alt='drawings' onClick={toggleMenu}>
            <button>DRAWINGS</button>
          </Link>
          <Link to='/illustrations' alt='illustrations' onClick={toggleMenu}>
            <button>ILLUSTRATIONS</button>
          </Link>
          <Link to='/studies' alt='studies' onClick={toggleMenu}>
            <button>STUDIES</button>
          </Link>
          <Link to='/contacts' alt='contacts' onClick={toggleMenu}>
            <button>CONTACTS</button>
          </Link>
        </div>
      </nav>
    )
  }
}
