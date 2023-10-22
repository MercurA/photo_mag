import { useContext, useEffect } from "react"

import Galery from "../components/image_galery/Galery"
import Cover from '../components/cover_image/Cover'
import { AppContext } from "../pages"
import { ACTIONS } from "../utils/state/reducer"

const DesktopContainer = () => {
    const context = useContext(AppContext)
    const { dispatch, imageList, currentImageCollection } = context

    useEffect(() => {
        const calcImageToSelect = Math.floor(imageList[currentImageCollection].length / 2)
        dispatch({
            type: ACTIONS.setImageDetails,
            payload: imageList[currentImageCollection][calcImageToSelect],
        })
    }, [currentImageCollection, dispatch, imageList])

    return (
        <>
            <Galery />
            <Cover image={context?.currentImage} />
        </>
    )
}

export default DesktopContainer