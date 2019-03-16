import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {illustration} from './data/data'
import './gallary.css'

export default class Illustrations extends Component {
  render() {
    const illustrations = illustration.map(illustration =>
        <ImageCard key={illustration.id}
          type={illustration.type}
          title={illustration.title}
          media={illustration.media}
          size={illustration.size}
          sold={illustration.sold}
          photo={illustration.photo}/>)
    return (
      <div className='gallary-display'>
        {illustrations}
      </div>
    )
  }
}
