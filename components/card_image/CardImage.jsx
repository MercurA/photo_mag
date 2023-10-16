import styles from './cardImage.module.css'
import Image from 'next/image'

const CardImage = ({image, setImageDetails, location}) => {
    return (
        <div className={styles.cardWrapper} onClick={() => setImageDetails && setImageDetails(image)}>
            <Image
                src={image} 
                alt={''} 
                fill={true}
                className='image'
            />
        </div>
    )
}

export default CardImage