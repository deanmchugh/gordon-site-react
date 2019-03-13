import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {painting} from './data/data'

export default class Paintings extends Component {
  render() {
    const paintings = painting.map(painting =>
        <ImageCard key={painting.key}
          type={painting.type}
          title={painting.title}
          media={painting.media}
          size={painting.size}
          sold={painting.sold}
          image={painting.photo}/>)
    return (
      <div>
        {paintings}
      </div>
    )
  }
}
