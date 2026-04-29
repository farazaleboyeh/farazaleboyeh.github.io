import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TitleBarDropdown from './titlebar-components/TitleBarDropdown.jsx';
import TitlebarFullscreen from './titlebar-components/TitlebarFullscreen.jsx';
import { motion, AnimatePresence } from "framer-motion";

function TitleBar({path, setCollection, setIsHovered, isHovered}){

  const [open, setOpen] = useState(false);
  const [scroll, secScroll] = useState(true);

  const [folders, setFolders] = useState([]); //folder array
  const [images, setImages] = useState([]);  //current images shown

  const [location, setLocation] = useState("gallery");

  const [isFullscreen, setIsFullscreen] = useState(false);
  
  useEffect(() => {
    fetch('http://localhost:3000/images/folders')
      .then(res => res.json())
      .then(data => setFolders(data));
  }, []);

  return(
    <>        
      <header>

        <h1>Yancheng Qiu</h1>

        <nav id="NavBarBig">
          <Link id="gallery" to="/"  onClick={() => {setLocation("gallery"); setCollection("Gallery")}} className={location === "gallery" ? "currentTab" : ""}>gallery</Link>
          <Link id="collections" onMouseEnter={() => setIsHovered(true)} className={location === "collections" ? "currentTab" : ""}>collections</Link>
          <Link id="about" to="/about" onClick={() => setLocation("about")} className={location === "about" ? "currentTab" : ""}>about</Link>
        </nav>
    
        <nav id="NavBarSmall">
          {!isFullscreen && 
            <img src="more.png" id="burger" alt="Hamburger Menu Icon" height="30px" width="auto" onClick={() => setIsFullscreen(true)}
          />}
        </nav>

      </header>
  
    {isHovered && <TitleBarDropdown 
      folders={folders} 
      setCollection={setCollection}
      setLocation={setLocation}
      onClose={() => setIsHovered(false)}
    />}

    {isFullscreen && <TitlebarFullscreen
      setIsFullscreen={setIsFullscreen}
    />}

      

    
    </>
  )
}

export default TitleBar

