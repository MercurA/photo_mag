import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

import { AppContext } from "../../pages"
import styles from './cardImage.module.css'
import { ACTIONS } from "../../utils/state/reducer"

const ImagePortal = ({dispatch}) => {
    const context = useContext(AppContext)
    const [imageClass, setImageClass] = useState()

    const {image} = context

    useEffect(() => {
        function detectTypeOfImage() {
            if(image.width > image.height) {
                setImageClass(styles.imageW)
            } else {
                setImageClass(styles.imageH)
            }
        }
        detectTypeOfImage()
    }, [imageClass])

    const disableImagePopUp = () => {
        if(image !== null) {
            dispatch({
                type: ACTIONS.setImageDetails,
                payload: null
            })
            dispatch({
                type: ACTIONS.setPopupState,
                payload: false
            }) 
        }
    }
    

    const createImagePop = () => {
        return (
            <div className={styles.imagePopContainer}>
                <div className={imageClass} onClick={disableImagePopUp}>
                    <Image src={image.path} fill alt=""/>
                </div>
            </div>
        )
    }

    return (
        <div>
            {image && createPortal(createImagePop(), document.body)}
        </div>
    )
}

export default ImagePortal