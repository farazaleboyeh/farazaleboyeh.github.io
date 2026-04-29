import { h1 } from 'framer-motion/client';
import styles from './TitlebarFullscreen.module.css'; 
import { Link } from 'react-router-dom';

function TitlebarFullscreen({ setIsFullscreen }){
    console.log('hi');
    return(
    // <nav id="NavBarSmallExpanded" className={styles.hey}>
    //   <img src="delete.png" alt="close" id="close" width="30px"/>
   
    // </nav>
    <div className={styles.fullscreenMenu}>
        <div className={styles.items}>
         <Link to="/" onClick={() => setIsFullscreen(false)}>gallery</Link>
         <Link to="/" onClick={() => setIsFullscreen(false)}>collections</Link>
         <Link to="/about" onClick={() => setIsFullscreen(false)}>about</Link>
       </div>
    </div>
    )
}

export default TitlebarFullscreen