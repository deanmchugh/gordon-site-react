import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {study} from './data/data'

export default class Studies extends Component {
  render() {

    const studies = study.map(study =>
        <ImageCard key={study.key}
          type={study.type}
          title={study.title}
          media={study.media}
          size={study.size}
          sold={study.sold}
          image={study.photo}/>)

    return (
      <div>
        {studies}
      </div>
    )
  }
}
