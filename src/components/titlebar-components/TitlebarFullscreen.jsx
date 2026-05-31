import styles from './TitlebarFullscreen.module.css'; 
import { Link } from 'react-router-dom';
import MenuItems from './MenuItems.jsx';
import CollectionsList from './CollectionsList.jsx';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";

function TitlebarFullscreen({ setIsFullscreen, folders, setCollection }){

    const [showCollections, setShowCollections] = useState(false);

    console.log('hi');
    return(
        <div className={styles.fullscreenMenu}>
            <div className={styles.left}>
                {showCollections && <img src="left.png" className={styles.back} alt="back" id="close" width="30px" onClick={() => setShowCollections(false)}></img>}
            </div>
            <div className={styles.right}>
                <img src="delete.png" alt="close" id="close" className={styles.close} width="30px" onClick={() => setIsFullscreen(false)}></img>
            </div>

        
            {!showCollections && <MenuItems
                setIsFullscreen = {setIsFullscreen}
                setShowCollections = {setShowCollections}
                setCollection={setCollection}
                key="menu-items"
            />}

            {showCollections && <CollectionsList
                setIsFullscreen = {setIsFullscreen}
                folders = {folders}
                setCollection = {setCollection}
                key="collections-list"
            />}
      

        </div>
    )
}

export default TitlebarFullscreen