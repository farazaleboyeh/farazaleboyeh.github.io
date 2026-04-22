
import styles from './LightBox.module.css'; 


function Lightbox({ image, onClose }){

console.log('test');
    return(
        
        <div className={styles.modalOverlay} onClick={onClose}>
            {/* <div className={styles.parent}> */}
            <img className={styles.selectedImage} src={image.url} alt={""} onClick={(e) => e.stopPropagation()} />
            <button className={styles.close}>close</button>
            {/* </div> */}
        </div>
    );
}

export default Lightbox