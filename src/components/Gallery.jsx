import React, { useState } from 'react';
import {testImages} from '../data/photos.js';

function Gallery(){

  // let location = useLocation()

  // console.log("type: " + typeof location)
  // console.log([location])
  // console.log("hey")

  return (
    <div className="gallery-grid">
      {testImages.map((photo) => (
        <img key={photo.id} src={photo.src} alt={photo.alt} className="photo"/>
      ))}
    </div>
  )
}

export default Gallery