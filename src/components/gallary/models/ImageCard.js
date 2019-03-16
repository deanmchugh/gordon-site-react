import React, { Component } from 'react'
import './imageCard.css'

export default class ImageCard extends Component {

  openImage(){
    console.log('clicked')
  }

  render() {
    return (
      <div className='card'>
        <div className='img-wrap'>
          <button><img src={this.props.photo} onClick={this.openImage} alt='artwork'/></button>
          <div className='img-description'>
            <div className='img-text'>
              <h1 style={{display: !this.props.title && 'none'}}>{this.props.title}</h1>
              <h2 style={{display: !this.props.media && 'none'}}>{this.props.media}</h2>
              <h2 style={{display: !this.props.size && 'none'}}>{this.props.size}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
