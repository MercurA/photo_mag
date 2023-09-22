import styles from './cardImage.module.css'
import Image from 'next/image'
const CardImage = ({image}) => {
    return (
        <div className={styles.cardWrapper}>
            <Image 
                src={image.path} 
                alt='default image' 
                fill={true}
                className='image'
            />
        </div>
    )
}

export default CardImage