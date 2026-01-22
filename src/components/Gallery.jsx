import React, { useState } from 'react';
import {testImages} from '../data/photos.js';

//Load all images (immediately, if eager is false they're loaded lazily)
const images = import.meta.glob('../assets/McMaster MBB/*.{png,jpg,jpeg,webp}', { eager: true });

function Gallery(){
  // const sortedImages = [...testImages].sort(
  //   (a, b) => a.order - b.order
  // );

  const imageList = Object.values(images).map((img) => img.default);

  return (
     <div className="gallery-grid" id="gallery">
      {imageList.map((imgSrc, index) => (
        <img key={index} src={imgSrc} alt={`Portfolio shot ${index}`} />
      ))}
     </div>
  )
}

export default Gallery

//   {sortedImages.map(image => (
//     <img
//       key={image.id}
//       src={image.src}
//       alt={image.alt}
//       loading="lazy"
//     />
//   ))}