import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TitlebarDropdown from './titlebar-components/TitlebarDropdown.jsx';
import TitlebarFullscreen from './titlebar-components/TitlebarFullscreen.jsx';


import { motion, AnimatePresence } from "motion/react"

import styles from './TitleBar.module.css'
import { div } from 'framer-motion/client';


function TitleBar({path, setCollection, setIsHovered, isHovered}){

  const [open, setOpen] = useState(false);
  const [scroll, secScroll] = useState(true);

  const [folders, setFolders] = useState([]); //folder array
  const [images, setImages] = useState([]);  //current images shown

  const [location, setLocation] = useState("gallery");

  const [isFullscreen, setIsFullscreen] = useState(false);

  const [isCollectionsFullscreen, setIsCollectionsFullscreen] = useState(false);

  const MotionTitlebarDropdown = motion(TitlebarDropdown)
  const MotionTitlebarFullscreen = motion(TitlebarFullscreen)

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return(
    <>        
      <div className={styles.parent} onMouseLeave={() => setIsHovered(false)}>
        <header>
          <div className={styles.parent0}>
            <Link id="gallery" to="/" className={styles.headerLink} onClick={() => {setLocation("gallery"); setCollection("Gallery");  scrollToTop();}}>
              <h1 >Yancheng Qiu</h1>
            </Link>
          
          <div className={styles.parent1}>
            <nav id="NavBarBig">
              <Link id="gallery" to="/"  onClick={() => {setLocation("gallery"); setCollection("Gallery")}} className={location === "gallery" ? "currentTab" : ""}>Gallery</Link>
              <Link id="collections" onMouseEnter={() => setIsHovered(true)} className={location === "collections" ? "currentTab" : ""}>
                Collections
                <img src="down-arrow.png" alt=""  className={styles.down}/>
              </Link>
                
              <Link id="about" to="/about" onClick={() => setLocation("about")} className={location === "about" ? "currentTab" : ""}>About</Link>
            </nav>
          </div>
        
            <nav id="NavBarSmall">
              {/* {!isFullscreen &&  */}
                <img src="more.png" id="burger" alt="Hamburger Menu Icon"  width="auto" onClick={() => setIsFullscreen(true)}/>
                {/* }  */}
            </nav>
          </div>

        </header>


       {/* { isHovered && <TitlebarDropdown
         folders={folders} 
          setCollection={setCollection}
          setLocation={setLocation}
          onClose={() => setIsHovered(false)}
        />
        } */}

    <AnimatePresence>
      {isHovered && (
        <div
          style={{ 
            position: 'fixed', 
            top: '3.2rem', 
            right: '1.4rem', 
            zIndex: 1,


          }}
        >
          <motion.div
            layout
            
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
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
       </div>
      )}
    </AnimatePresence>


    <AnimatePresence>
      {isFullscreen && <TitlebarFullscreen
        setIsFullscreen={setIsFullscreen}
        setIsCollectionsFullscreen={setIsCollectionsFullscreen}
        folders={folders}
        setCollection={setCollection}
      />}
    </AnimatePresence>

      
      </div>
    </>
  )
}

export default TitleBar

