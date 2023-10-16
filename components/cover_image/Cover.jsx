import Image from 'next/image';
import styles from './cover.module.css'
import { useState } from 'react';


const Cover = ({image}) => {
    const texts = ['Black & White','Landscape','Journalism']
    const [selected, setSelected] = useState(0)

    const classStyleBlur = index => selected === index ? styles.textUnblur : ''

    const handleSelected = (e) => {
        setSelected(Number(e.target.dataset.index))
    }

    return (
        <div className={styles.container}>
            <div className={styles.effect}>
                <Image 
                    src={image} 
                    fill 
                    sizes="(max-width: 1024px) 70vw , 100vw" 
                    alt={''}
                    style={{
                        objectFit: 'contain',
                        padding: '40px',
                        
                    }}
                    id='cover_image'
                />
            </div>
            <div className={styles.effectContainer}>
                <div className={styles.blur}>
                  {texts.map((el,index) => (
                    <div 
                        onClick={handleSelected} 
                        className={`${styles.text} ${classStyleBlur(index)}`} 
                        key={index} 
                        data-index={index}
                        data-tag=""
                    >{el}</div>
                  ))}
                </div>
                <div className={styles.blur}>
                </div>
            </div>
        </div>
    )
}

export default Cover;