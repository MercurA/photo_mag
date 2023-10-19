import { useContext, useEffect } from "react"

import Galery from "../components/image_galery/Galery"
import Cover from '../components/cover_image/Cover'
import { AppContext } from "../pages"
import { ACTIONS } from "../utils/state/reducer"

const DesktopContainer = ({ dispatch }) => {
    const context = useContext(AppContext)

    useEffect(() => {
        dispatch({
            type: ACTIONS.setImageDetails,
            payload: {
                path: '/images/2.png',
                width: 6016,
                height: 4016
            },
        })
    }, [])

    return (
        <>
            <Galery />
            <Cover image={context?.currentImage}/>
        </>
    )
}

export default DesktopContainer