import React, { Component } from 'react'
import './contacts.css'

export default class Contacts extends Component {
  render() {
    return (
      <div className='contact-display'>
        <a href='https://www.instagram.com/lisagordonart/' target='_blank' rel='noopener noreferrer'>
          <h1>INSTAGRAM: lisagordonart</h1></a>
        <a href='mailto:lisagordonart@gmail.com' target='_blank' rel='noopener noreferrer'>
          <h1>EMAIL: lisagordonart@gmail.com</h1></a>
      </div>
    )
  }
}
