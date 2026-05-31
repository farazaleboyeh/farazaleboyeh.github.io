import styles from './CollectionsList.module.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";


function CollectionsList({ setIsFullscreen, folders, setCollection }){

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05
             
            },
        },
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 25 } },
        exit: { y: -15, opacity: 0 },
    };

    return(
        <motion.div
           variants={containerVariants}
                       initial="hidden"
                       animate="show"
                       exit="exit"
                       className={styles.items}
        >
      
                {folders.map(f => (
                    f.name !== "Gallery" && (
                        <motion.div variants={itemVariants} >
                    <Link id="gallery" to="/" >
                        <button key={f.path} onClick={() => {setIsFullscreen(false); setCollection(f.name)}}>
                            {f.name}
                        </button>
                    </Link>
                    
                    </motion.div>
                )))}
     
      
        </motion.div>
    )
}

export default CollectionsList