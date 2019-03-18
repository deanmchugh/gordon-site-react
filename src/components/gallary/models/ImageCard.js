import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import './imageCard.css'

export default class ImageCard extends Component {
  render() {
    return (
      <div className='card'>
        <Popup trigger={
           <div className='img-wrap'>
           <img className='thumbnail' src={this.props.photo} alt='artwork'/>
           <div className='img-description'>
             <div className='img-text'>
               <h1 style={{display: !this.props.title && 'none'}}>{this.props.title}</h1>
               <h2 style={{display: !this.props.media && 'none'}}>{this.props.media}</h2>
               <h2 style={{display: !this.props.size && 'none'}}>{this.props.size}</h2>
             </div>
           </div>
         </div>
        }
        modal
        closeOnDocumentClick>
          <img className='image-display' src={this.props.photo} alt='artwork'/>
        </Popup>
      </div>
    )
  }
}
