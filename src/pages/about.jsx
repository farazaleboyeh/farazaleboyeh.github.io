import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';

export function About(){
    const [images, setImages] = useState([]);  

    useEffect(() => {
        //fetch returns a 'promise', and its response is the 'answer'
        fetch('http://localhost:3000/images/about')
        .then(res => res.json())
        .then(data => setImages(data));
    }, []);

    return(
        <>
            {images.map(img => (
            <div key={img.id}>
                <img src={img.url} alt={img.title} style={{ width: '100%' }} />
            </div>
            ))}
        </>
    )
}

export default About