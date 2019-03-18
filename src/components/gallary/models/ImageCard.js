import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import './imageCard.css'

export default class ImageCard extends Component {
  render() {

    const ImagePopup = () => (
      <Popup trigger={<button><img src={this.props.photo} alt='artwork'/></button>}
        position='right center'>
        <img src={this.props.photo} alt='artwork'/>
      </Popup>
    )

    return (
      <div className='card'>
        <div className='img-wrap'>
          <ImagePopup />
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
