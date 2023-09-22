import CardImage from './CardImage'
import styles from './cardImage.module.css'

const images = [
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg'
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg'
    },
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg'
    },
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg'
    },
   
]


const CardContainer = () => {
    return (
        <div className={styles.container}>
            {images.map((el, i) => (<CardImage key={i} image={el}/>))}
        </div>
    )
}

export default CardContainer