import styles from './MenuItems.module.css'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";

function MenuItems({ setIsFullscreen, setShowCollections, setCollection }){

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
        // <AnimatePresence>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={styles.items}
            >
                <motion.div variants={itemVariants} >
                    <Link onClick={() => {setIsFullscreen(false); setCollection('gallery')}}>
                        Gallery
                    </Link>
                </motion.div>

                <motion.div variants={itemVariants} >
                    <Link to="/" onClick={() => setShowCollections(true)}>Collections</Link>
                </motion.div>

                <motion.div  variants={itemVariants} >
                    <Link to="/about" onClick={() => setIsFullscreen(false)}>
                        About
                    </Link>
                </motion.div>   
            </motion.div>
        // </AnimatePresence>  
    )
}

export default MenuItems