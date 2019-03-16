import React, { Component } from 'react'
import ImageCard from './models/ImageCard'
import {study} from './data/data'
import './gallary.css'

export default class Studies extends Component {
  render() {

    const studies = study.map(study =>
        <ImageCard key={study.id}
          type={study.type}
          title={study.title}
          media={study.media}
          size={study.size}
          sold={study.sold}
          photo={study.photo}/>)

    return (
      <div className='gallary-display'>
        {studies}
      </div>
    )
  }
}
