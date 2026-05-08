import React, { useState, useEffect, useMemo } from 'react';


import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useOutletContext } from "react-router-dom";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

import styles from './Gallery.module.css'; 

import Lightbox from './Lightbox.jsx';

function Gallery(){
  const { collection, setCollection } = useOutletContext(); // tree's context
  const [selectedImg, setSelectedImg] = useState(null); //lightbox image

  // const [folders, setFolders] = useState([]); //folder array
  const [images, setImages] = useState([]);  //current images shown
  
  useEffect(() => {
    console.log("collection changed:", collection);
  }, [collection]);

  useEffect(() => {
      //fetch returns a 'promise', and its response is the 'answer'
      // fetch(`http://localhost:3000/images/folders/${encodeURIComponent(collection)}`)
       fetch(`https://mattress-strange-satisfy-why.trycloudflare.com/images/folders/${encodeURIComponent(collection)}`)
      
      .then(res => res.json())
      .then(data => setImages(data));

      console.log("render images:", images); 
  }, [collection]);

  //numCols is state variable and setnumcols is setter function. numCols cant be changed in any way besides with setnumcols. 
  //setnumcols(2) alerts react that data has changed and elements should be re-rendered.
  //usetate creates link between data and ui
  const [numCols, setNumCols] = useState(4);

  useEffect(() => {
    const updateCols = () => {
        const width = window.innerWidth;
        if (width < 600) setNumCols(1);      // Mobile: 1 column
        else if (width < 900) setNumCols(2); // Tablet: 2 columns
        else if (width < 1200) setNumCols(3);// Small Desktop: 3 columns
        else setNumCols(4);                  // Large Desktop: 4 columns
      };
      updateCols(); // Run once on mount
      window.addEventListener('resize', updateCols);
      return () => window.removeEventListener('resize', updateCols); // Cleanup
  }, []);

  const cols = useMemo(() => {
    const result = Array.from({ length: numCols }, () => []);
    images.forEach((image, index) => {
      result[index % numCols].push(image);
    });
    return result;
  }, [images, numCols]); // Only re-run if numCols AND images changes

  //showNext IS the arrow function
 const showNext = () => {
  const currentIndex = images.findIndex(img => img.id === selectedImg.id);
  console.log(currentIndex);
    const nextIndex = (currentIndex + 1);
    setSelectedImg(images[nextIndex]);
    console.log(currentIndex);
};

const showPrev = () => {
  const currentIndex = images.findIndex(img => img.id === selectedImg.id);
  const prevIndex = (currentIndex - 1);
  setSelectedImg(images[prevIndex]);
  
};


  return (
    <>    
      
      <div className="row" id="gallery">
        {cols.map((colImages, colIndex) => (
          <div key={colIndex} className={`column col${colIndex + 1}`}>
            {colImages.map((img) => (
              <div key={img.id} className="item">
                <img 
                  onClick={() => setSelectedImg(img)}
                  src={img.url} 
                  loading="lazy"
                  alt={`Gallery item ${img.name}`} 
                  className={styles.galleryImage}
                  decoding="async"
                />
              </div> 
            ))}
          </div>
        ))}
      </div>
      
      {selectedImg && (
        <Lightbox 
          image={selectedImg} 
          onClose={() => setSelectedImg(null)} 
          onNext={showNext}
          onPrev={showPrev}
        /> 
      )}
    </>
  );
}

export default Gallery