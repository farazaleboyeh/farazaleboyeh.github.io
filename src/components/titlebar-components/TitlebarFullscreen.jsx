import styles from './TitlebarFullscreen.module.css'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems.jsx';
import CollectionsList from './CollectionsList.jsx';
import React, { useState } from 'react';



function TitlebarFullscreen({ setIsFullscreen, folders, setCollection }){

    const [showCollections, setShowCollections] = useState(false);

    console.log('hi');
    return(
        <>
            <div className={styles.fullscreenMenu}>
                <div className={styles.topButtons}>
                    <div className={styles.left}>
                        {showCollections && <img src="left.png" alt="back" id="close" width="30px" onClick={() => setShowCollections(false)}></img>}
                    </div>
                    <div className={styles.right}>
                        <img src="delete.png" alt="close" id="close" width="30px" onClick={() => setIsFullscreen(false)}></img>
                    </div>
                </div>
                
                {!showCollections && <MenuItems
                    setIsFullscreen = {setIsFullscreen}
                    setShowCollections = {setShowCollections}
                />}

                {showCollections && <CollectionsList
                    setIsFullscreen = {setIsFullscreen}
                    folders = {folders}
                    setCollection = {setCollection}
                />}
            </div>
        </>
    )
}

export default TitlebarFullscreen