
import styles from './LightBox.module.css'; 


function Lightbox({ image, onClose, onNext, onPrev }){

    const handleNextClick = (e) => {
    e.stopPropagation(); 
    onNext();
  };

  const handlePrevClick = (e) => {
    e.stopPropagation(); 
    onPrev();
  };

console.log('test');
    return(
        
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* <div className={styles.parent}> */}
            <img className={styles.selectedImage} src={image.url} alt={""} onClick={(e) => e.stopPropagation()} />
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
    );
}

export default Lightbox