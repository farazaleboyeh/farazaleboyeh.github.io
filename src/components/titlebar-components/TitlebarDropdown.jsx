import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import styles from './TitlebarDropdown.module.css'; 
import { Link } from 'react-router-dom';
import { motion } from "motion/react"


function TitlebarDropdown({ folders, setCollection, setLocation, onClose, ...props }){
    return(
            <motion.div {...props} className={styles.testParentContainer}>
                <div className={styles.testParent} onMouseLeave={() => onClose()} onClick={() => setLocation("collections")}>
                    {folders.map(f => (
                        f.name !== "Gallery" && (
                        <Link id="gallery" to="/" className={styles.test}>
                            <div key={f.path} onClick={() => setCollection(f.name)} >
                                {f.name}
                        </div>
                    </Link>
                )))}
            </div>
        </motion.div>
    )
}

export default TitlebarDropdown