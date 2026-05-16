import styles from './TitlebarFullscreen.module.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function MenuItems({ setIsFullscreen, setShowCollections, setCollection }){

    return(
   
        <div className={styles.items}>
            <Link to="/" onClick={() => {setIsFullscreen(false); setCollection('gallery')}}>gallery</Link>
            <Link to="/" onClick={() => setShowCollections(true)}>collections</Link>
            <Link to="/about" onClick={() => setIsFullscreen(false)}>about</Link>
        </div>
    )
}

export default MenuItems