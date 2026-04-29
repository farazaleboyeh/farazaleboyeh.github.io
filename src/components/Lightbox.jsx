
import styles from './Lightbox.module.css'; 
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({ image, onClose, onNext, onPrev }){

    const handleNextClick = (e) => {
    e.stopPropagation(); 
    onNext();
  };

  const handlePrevClick = (e) => {
    e.stopPropagation(); 
    onPrev();
  };

//   const handleEscapeKey = (e) => {
//     if(e.key === 'Escape'){
//         onClose;
//     }
//   }

// console.log('test');
    return(
        
        // <motion.div
        //     style={{
        //         position: "fixed",
        //         inset: 0,
        //         // background: "rgba(201, 45, 45, 0.6)",
        //         display: "flex",
        //         justifyContent: "center",
        //         alignItems: "center"
                
        //     }}
        // >
        <div className={styles.modalOverlay} onClick={onClose}>

            <img 
                className={styles.selectedImage} 
                src={image.url} 
                // layoutId={image.id} 
                alt={""} 
                onClick={(e) => e.stopPropagation()} 
                // transition={{
                //     type: "spring", 
                //     stiffness: 300, 
                //     damping: 40 
                    
                // }}
                // initial={{ scale: 0.95 }}
                // animate={{ scale: 1 }}
            />

            <div className={styles.buttons}>
                <button className={styles.close} onClick={handlePrevClick}>
                    <img src="left.png" alt="" />
                </button>
                <button className={styles.close}>
                    <img src="delete.png" alt="" />
                </button>
                <button className={styles.close} onClick={handleNextClick}>
                    <img src="right.png" alt="" />
                </button>
                
            </div>
        </div>
        
        // </motion.div>
    );
}

export default Lightbox