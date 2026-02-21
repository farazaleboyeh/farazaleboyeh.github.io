import React, { useState, useEffect, useMemo } from 'react';
import {testImages} from '../data/photos.js';

//Importing all images
const rawimages = import.meta.glob('../assets/Gallery/*.{png,jpg,jpeg,webp,JPG}', { eager: true });

function Gallery(){

  //Gathering and sorting images
  const images = Object.entries(rawimages)
  .sort((a, b) => {
    return a[0].localeCompare(b[0], undefined, { numeric: true, sensitivity: 'base' });
  })
  .map(([filename, module]) => module.default);

  //

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
  }, [numCols]); // Only re-run if numCols changes


  images.forEach((image, index) => {   /* iterates through images, each iteration is an 'image', and index increments automatically for each iteration (optional, starts at 0) */
    // This math automatically puts img 0 in col 0, img 1 in col 1, img 4 in col 0, etc.
    cols[index % numCols].push(image); //Moduluo operator, if numCols is 4, results in 0..3 only (for columns), .push adds to the respective sub-array
  });

  //Everything within return is JSX, above is JS
  return (
    <div className="row" id="gallery">
      {cols.map((colImages, colIndex) => (
        <div key={colIndex} className={`column col${colIndex + 1}`}>
          {colImages.map((src, imgIndex) => (
            <div key={imgIndex} className="item">
              <img 
                src={src} 
                alt={`Gallery item ${imgIndex}`} 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Gallery

/*

React-friendliness:
- automated asset discovery (import.meta.glob)
- .map() instead of document.createElement. 


*/