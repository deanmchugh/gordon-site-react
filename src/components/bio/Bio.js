import React, { Component } from 'react'
import './bio.css'
import mainImage from './img/Title- Ibis   Media- Graphite and gouach on bristle   Size- 35x50cm.jpg'

export default class Bio extends Component {
  render() {
    return (
      <body className='bio-display'>
        <div className='bio-image-frame'>
          <img className='bio-image' src={mainImage} alt='bio display'/>
        </div>
        <h1 className='name'>Lisa Gordon</h1>
        <div className='bio'>
          <p>I am an emerging artist. I am a painter and drawer working 
            in various mediums. Primarily my paintings are in oil or 
            gouache and my drawings are typically graphite and charcoal. 
            I also make my own natural washes from tea, coffee and onion 
            skins.</p>
            <p>My work is often figurative with a strong focus on 
            the portrait, although I am just as happy drawing on images 
            from nature.</p>
            <p>What makes us unique as humans is our ability 
            to contemplate. My themes will generally explore the human 
            condition and the relationship of our internal world to the 
            physical world.  I want to visually explore my curiosity and 
            the observation of ourselves and the world around us. </p>
        </div>
      </body>
    )
  }
}
