import { useContext } from 'react'
import { ACTIONS } from '../../utils/state/reducer'
import CardImage from './CardImage'
import styles from './cardImage.module.css'
import { AppContext } from '../../pages'

const CardContainer = ({dispatch}) => {
    const context = useContext(AppContext)

    const {imageList, currentImageCollection} = context

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
            {imageList[currentImageCollection] && imageList[currentImageCollection].map((el, i) => (<CardImage key={i} image={el} setImageDetails={setImageDetails}/>))}
        </div>
    )
}

export default CardContainer