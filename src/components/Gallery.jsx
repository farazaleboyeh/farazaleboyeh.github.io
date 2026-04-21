import React, { useState, useEffect, useMemo } from 'react';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useOutletContext } from "react-router-dom";


function Gallery(){
  const { collection, setCollection } = useOutletContext(); // tree's context

   useEffect(() => {
    console.log("collection changed:", collection);
  }, [collection]);

  const [images, setImages] = useState([]); 
  
 
  useEffect(() => {
      //fetch returns a 'promise', and its response is the 'answer'
      fetch(`http://localhost:3000/images/${collection}`)
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

  // images.forEach((image, index) => {   
  //   cols[index % numCols].push(image); 
  // });

  //Everything within return is JSX, above is 
  // if(images.length === 0){
  //   return(
  //     <div className="loading-screen">
  //               <img src="https://media.tenor.com/2BLI5EO7yVAAAAAj/loading-image.gif" alt="" />
  //           </div>
  //   );
  // }
  return (
    <div className="row" id="gallery">
    
      {cols.map((colImages, colIndex) => (
        <div key={colIndex} className={`column col${colIndex + 1}`}>
          {colImages.map((img) => (
            <div key={img.id} className="item">
              <img 
                src={img.url} 
                alt={`Gallery item ${img.name}`} 
                className={'galleryImage'}
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