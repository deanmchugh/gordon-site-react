import React, { Component } from 'react'
import './imageCard.css'

export default class ImageCard extends Component {
  render() {
    return (
      <div className='card'>
        <div className='img-wrap'>
          <figure>
            <img style={{display: !this.props.photo && 'none'}} src={this.props.photo} alt='artwork'/>
          </figure>
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
