import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './TitlebarDropdown.module.css'; 
import { Link } from 'react-router-dom';


function TitleBarDropdown({ folders, setCollection, setLocation, onClose }){
    return(
        <div className={styles.dropdown} onMouseLeave={() => onClose()} onClick={() => setLocation("collections")}>
            {folders.map(f => (
                f.name !== "Gallery" && (
                <Link id="gallery" to="/" >
                    <button key={f.path} onClick={() => setCollection(f.name)}>
                        {f.name}
                    </button>
                </Link>
            )))}
        </div>
    )
}

export default TitleBarDropdown