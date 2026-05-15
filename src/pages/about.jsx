import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';
import styles from './about.module.css'; 
import Form from '../components/Form'

export function About(){
    return(
        <>        
            <div className={styles.parent0}>
                <div className={styles.parent1}>
                    <img  src="about.jpg"  className={styles.cat}></img>
                    <span className={styles.bioText}>
                        Hey, I'm Yancheng, a photographer based between Ottawa and Toronto. Since first picking up a camera in high school, I've been gaining significant experience photographing sporting events, including the Volleyball Nations League and U SPORTS. Drawing from my background as an athlete, my work focuses on capturing defining moments and encapsulating the emotions behind them. 
                        <br />
                        <br />
                        Through authentic storytelling, I'm aiming to build a community that resonates with athletes and the stories they carry.
                    </span>
                </div>
                
                <div className={styles.parent2}>
                    
                    <div className={styles.contactButtons}>
                        
                        <a href="https://www.instagram.com/qs._flicks/" target="_blank">
                            <img src="ig.png" alt="" className={styles.ig}/>
                        </a>
                        <a href="mailto:yanchengqiu5@gmail.com">
                            <img src="mail.png" alt="" className={styles.mail}/>
                        </a>
                    </div>

                    <hr />

                    <Form/>
                </div>
            </div>
            
            <div className={styles.bottomText}>
                <span className={styles.aText}>by</span> <a href="https://github.com/farazaleboyeh" target='_blank'>Faraz Aleboyeh</a>
            </div>
        </>

    )
}

export default About



               