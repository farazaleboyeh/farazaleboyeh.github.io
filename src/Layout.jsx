import TitleBar from "./components/TitleBar"
import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

/* Prop drilling is performed here, to pass the current path to the Navbar. Is accepted React practice */

function Layout({path}){
    const location = useLocation();
    const [collection, setCollection] = useState("Gallery");
    const [isHovered, setIsHovered] = useState(false);
    return(
        <>
            <TitleBar 
                path={location.pathname} 
                setCollection={setCollection} 
                collection={collection}
                setIsHovered={setIsHovered} 
                isHovered={isHovered}
            />
            <main>
                <Outlet 
                    context={{ collection, setCollection, setIsHovered }} 
                />
            </main>
        </>
    )
}

export default Layout