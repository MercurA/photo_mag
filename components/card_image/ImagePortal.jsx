import { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

import { AppContext } from "../../pages/_app"
import styles from './cardImage.module.css'
import { ACTIONS } from "../../utils/state/reducer"

const ImagePortal = () => {
    const context = useContext(AppContext)
    const [imageClass, setImageClass] = useState()
    const { currentImage, dispatch } = context

    useEffect(() => {
        function detectTypeOfImage() {
            if (currentImage.width > currentImage.height) {
                setImageClass(styles.imageW)
            } else {
                setImageClass(styles.imageH)
            }
        }
        detectTypeOfImage()
    }, [imageClass])

    const disableImagePopUp = () => {
        if (currentImage !== null) {
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
                    <Image src={currentImage.path} fill alt="" />
                </div>
            </div>
        )
    }

    return (
        <div>
            {currentImage && createPortal(createImagePop(), document?.body)}
        </div>
    )
}

export default ImagePortal