import React, { useState } from 'react';

const images = import.meta.glob('../assets/For Fun/*.{png,jpg,jpeg,webp}', { eager: true });

export function ForFun(){
    const imageList = Object.values(images).map((img) => img.default);
    return(
        <div className="gallery-grid" id="gallery">
        {imageList.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={`Portfolio shot ${index}`} />
        ))}
        </div>
    )
}

export default ForFun




//Load all images (immediately, if eager is false they're loaded lazily)


function Gallery(){
  // const sortedImages = [...testImages].sort(
  //   (a, b) => a.order - b.order
  // );

  
}

