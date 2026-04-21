import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';
import styles from './about.module.css'; 

export function About(){
    return(
        <>        
        <div className={styles.parent0}>
            <div className={styles.parent1}>
                <div className={styles.left}>
                    <img  src="about.jpg"  className={styles.cat}></img>
                </div>
                <div className={styles.right}>
                    <div className={styles.parent2}>
                        <div className={styles.top}>
                            <span className={styles.bioText}>
                                Hello, my name is Yancheng, I'm a photographer based between Ottawa and Toronto, Canada. Since first picking up a camera in high school, I have gained experience photographing sporting events, including the Volleyball Nations League and U SPORTS. Drawing from my background as an athlete, my work focuses on capturing defining moments and encapsulating the emotions behind them. 
                                
                                <br />
                                <br />
                                Through authentic storytelling, I aim to build a community that resonates with athletes and the stories they carry.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            {/* <img src="ig.png" alt="" className={styles.ig}/>
                            <img src="mail.png" alt="" className={styles.mail}/>
                             */}
                         

                                <span>instagram email</span>
                            

                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className={styles.bottomText}>
                <a href="https://github.com/farazaleboyeh" target='_blank'>Developed by Faraz Aleboyeh</a>
            </div>
            
        </>

    )
}

export default About