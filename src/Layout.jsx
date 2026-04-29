import TitleBar from "./components/TitleBar"
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

/* Prop drilling is performed here, to pass the current path to the Navbar. Is accepted React practice */

function Layout({path}){
    const location = useLocation();
    const [collection, setCollection] = useState("gallery");
    const [isHovered, setIsHovered] = useState(false);

    // console.log("test: " + collection);

    return(
        <>
            <TitleBar path={location.pathname} setCollection={setCollection} setIsHovered={setIsHovered} isHovered={isHovered}/>
            <main>
                {/* <AnimatePresence>

                    <motion.div
                        initial={false} 
                        animate={{ y: isHovered ? 10 : 0 }}
                        transition={{ type: "spring", stiffness: 1 }}
                    > */}
                    <Outlet context={{ collection, setCollection }}/>
                    {/* </motion.div>

                </AnimatePresence> */}
                
            </main>
        </>
    )
}

export default Layout