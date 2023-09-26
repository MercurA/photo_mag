import { ACTIONS } from '../../utils/state/reducer'
import CardImage from './CardImage'
import styles from './cardImage.module.css'

const images = [
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg',
        alt: "street view"
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg',
        alt: "cityscape"
    },
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg',
        alt: 'aley'
    },
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg',
        alt: 'landscape'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg',
        alt: ''
    },
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg',
        alt: "street view"
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg',
        alt: "cityscape"
    },
    
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg',
        alt: 'landscape'
    },
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg',
        alt: 'aley'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg',
        alt: ''
    },
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg',
        alt: "street view"
    },
   
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg',
        alt: 'aley'
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg',
        alt: "cityscape"
    },
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg',
        alt: 'landscape'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg',
        alt: ''
    },
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg',
        alt: "street view"
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg',
        alt: "cityscape"
    },
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg',
        alt: 'aley'
    },
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg',
        alt: 'landscape'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg',
        alt: ''
    },
    {
        width: 1636,
        height: 2545,
        path: '/images/1.jpg',
        alt: "street view"
    },
    {
        width: 6000,
        height: 4000,
        path: '/images/2.jpg',
        alt: "cityscape"
    },
    {
        width: 3854,
        height: 5781,
        path: '/images/3.jpg',
        alt: 'aley'
    },
    {
        width: 5272,
        height: 3948,
        path: '/images/4.jpg',
        alt: 'landscape'
    },
    {
        width: 9504,
        height: 6336,
        path: '/images/5.jpg',
        alt: ''
    },
]

const CardContainer = ({dispatch}) => {

    const setImageDetails = (image) => {
        dispatch({
            type: ACTIONS.setImageDetails,
            payload: image
        })
        dispatch({
            type: ACTIONS.setPopupState,
            payload: true
        }) 
    }

    return (
        <div className={styles.container}>
            {images.map((el, i) => (<CardImage key={i} image={el} setImageDetails={setImageDetails}/>))}
        </div>
    )
}

export default CardContainer