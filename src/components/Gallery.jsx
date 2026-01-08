import React, { useState } from 'react';
import {testImages} from '../data/photos.js';

function Gallery(){
  const sortedImages = [...testImages].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="gallery-grid" id="gallery">
      {sortedImages.map(image => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />
      ))}
      
     
    
    </div>
  )
}

export default Gallery