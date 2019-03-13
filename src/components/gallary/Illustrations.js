import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {illustration} from './data/data'

export default class Illustrations extends Component {
  render() {
    const illustrations = illustration.map(illustration =>
        <ImageCard key={illustration.key}
          type={illustration.type}
          title={illustration.title}
          media={illustration.media}
          size={illustration.size}
          sold={illustration.sold}
          image={illustration.photo}/>)
    return (
      <div>
        {illustrations}
      </div>
    )
  }
}
