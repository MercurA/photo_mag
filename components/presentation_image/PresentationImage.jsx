import { useEffect } from 'react'
import Image from 'next/image'

import styles from './presentation.module.css'
import {useScreenWidthAndHeight } from '../../utils'

const Presentation = () => {
    let dimensions = useScreenWidthAndHeight()

    const handleWidth = () => {
        console.log(dimensions)
        if(dimensions > 1024) {
            return {
                width: 900,
                height: 500
            }
        } else if (dimensions > 1440) {
            return {
                width: 1300,
                height: 800
            }
        }
    }


    return (
        <div className={styles.container}>
            {/* <Image 
                src={"https://fasrsources266.weebly.com/uploads/1/2/5/3/125388556/646580940.jpg"} 
                width={1300} 
                height={800} 
                
            /> */}
            <img  src={"https://fasrsources266.weebly.com/uploads/1/2/5/3/125388556/646580940.jpg"}  alt='mountain road' className={styles.image} />
        </div>
    )
}

export default Presentation;