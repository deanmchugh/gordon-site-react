import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {drawing} from './data/data'
import './gallary.css'

export default class Drawings extends Component {
  render() {

    const drawings = drawing.map(drawing =>
        <ImageCard key={drawing.id}
          type={drawing.type}
          title={drawing.title}
          media={drawing.media}
          size={drawing.size}
          sold={drawing.sold}
          photo={drawing.photo}/>)

    return (
      <div className='gallary-display'>
        {drawings}
      </div>
    )
  }
}
