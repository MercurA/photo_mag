import Image from 'next/image';
import styles from './cover.module.css'
import { useState } from 'react';


const Cover = () => {
    const texts = ['Black & White','Landscape','Journalism']
    const [selected, setSelected] = useState(0)

    const handleSelected = (e) => {
        setSelected(Number(e.target.dataset.index))
    }

    return (
        <div className={styles.container}>
            <Image 
                src={'/images/2.png'} 
                fill 
                sizes="100vw" 
                alt="" 
                style={{
                    objectFit: 'contain',
                  }}    
            />
            <div className={styles.effectContainer}>
                <div className={styles.blur}>
                  {texts.map((el,index) => (
                    <div 
                        onClick={handleSelected} 
                        className={`${styles.text} ${selected === index && styles.textUnblur}`} 
                        key={index} 
                        data-index={index}
                    >{el}</div>
                  ))}
                </div>
                <div className={styles.notBlur}></div>
                <div className={styles.blur}>

                </div>
            </div>
        </div>
    )
}

export default Cover;