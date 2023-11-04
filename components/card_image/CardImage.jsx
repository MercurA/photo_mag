import styles from './cardImage.module.css'
import Image from 'next/image'

const CardImage = ({image, setImageDetails}) => {
    return (
        <div className={styles.cardWrapper} onClick={() => setImageDetails && setImageDetails(image)}>
            <Image
                src={image.path} 
                alt={''} 
                fill={true}
                className='image'
            />
        </div>
    )
}

export default CardImage