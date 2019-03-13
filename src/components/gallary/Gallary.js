import React, { Component } from 'react'
import {painting, drawing, illustration, study} from './data/data'
import ImageCard from './models/ImageCard'

const Paintings = painting.map()
const Drawings = drawing.map()
const Illustrations = illustration.map()
const Studies = study.map()

class Gallary extends Component {
  render() {
    return (
      <div>
      </div>
    )
  }
}

export {Paintings, Drawings, Illustrations, Studies}
