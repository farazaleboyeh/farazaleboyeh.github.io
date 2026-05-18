import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TitlebarDropdown from './titlebar-components/TitlebarDropdown.jsx';
import TitlebarFullscreen from './titlebar-components/TitlebarFullscreen.jsx';


import { motion, AnimatePresence } from "motion/react"

import styles from './TitleBar.module.css'


function TitleBar({path, setCollection, setIsHovered, isHovered}){

  const [open, setOpen] = useState(false);
  const [scroll, secScroll] = useState(true);

  const [folders, setFolders] = useState([]); //folder array
  const [images, setImages] = useState([]);  //current images shown

  const [location, setLocation] = useState("gallery");

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isCollectionsFullscreen, setIsCollectionsFullscreen] = useState(false);

  const MotionTitlebarDropdown = motion(TitlebarDropdown)

 const handleSelect = (id) => {
  console.log(`Selected item with id ${id}`);
};
  useEffect(() => {
     fetch('https://api.yanchengqiu.com/images/folders')
      .then(res => res.json())
      .then(data => setFolders(data));
      
  }, []);
  console.log(folders);
   useEffect(() => {
        document.body.classList.toggle(styles.scroll, isFullscreen);
  }, [isFullscreen]);

  

  return(
    <>        
      <div className={styles.parent} onMouseLeave={() => setIsHovered(false)}>
        <header>

          <h1>Yancheng Qiu</h1>
    
          <nav id="NavBarBig">
            <Link id="gallery" to="/"  onClick={() => {setLocation("gallery"); setCollection("Gallery")}} className={location === "gallery" ? "currentTab" : ""}>gallery</Link>
            <Link id="collections" onMouseEnter={() => setIsHovered(true)} className={location === "collections" ? "currentTab" : ""}>collections</Link>
            <Link id="about" to="/about" onClick={() => setLocation("about")} className={location === "about" ? "currentTab" : ""}>about</Link>
          </nav>
      
          <nav id="NavBarSmall">
             {/* {!isFullscreen &&  */}
              <img src="more.png" id="burger" alt="Hamburger Menu Icon" height="30px" width="auto" onClick={() => setIsFullscreen(true)}/>
              {/* }  */}
          </nav>

        </header>


       { isHovered && <TitlebarDropdown
         folders={folders} 
          setCollection={setCollection}
          setLocation={setLocation}
          onClose={() => setIsHovered(false)}
        />
        }

    {/* <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        >
          
        <MotionTitlebarDropdown
          folders={folders} 
          setCollection={setCollection}
          setLocation={setLocation}
          onClose={() => setIsHovered(false)}
        />
        
       </motion.div>
      )}
    </AnimatePresence> */}



    {isFullscreen && <TitlebarFullscreen
      setIsFullscreen={setIsFullscreen}
      setIsCollectionsFullscreen={setIsCollectionsFullscreen}
      folders={folders}
      setCollection={setCollection}
    />}
      
      </div>
    </>
  )
}

export default TitleBar

