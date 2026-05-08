import styles from './CollectionsList.module.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CollectionsList({ setIsFullscreen, folders, setCollection }){

    return(
   
        <div className={styles.items}>
            {folders.map(f => (
                f.name !== "Gallery" && (
                <Link id="gallery" to="/" >
                    <button key={f.path} onClick={() => {setIsFullscreen(false); setCollection(f.name)}}>
                        {f.name}
                    </button>
                </Link>
            )))}
            <button>hey</button>
            <button>hey</button>
            <button>hey</button>
        </div>
    )
}

export default CollectionsList