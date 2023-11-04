import { useContext } from 'react'

import CardContainer from '../components/card_image/CardContainer'
import ImagePortal from '../components/card_image/ImagePortal'
import Menu from "../components/menu/Menu"
import { AppContext } from '../pages/_app'
import Comingsoon from '../components/misc/Comingsoon'

const MobileContainer = () => {
    const context = useContext(AppContext)
    
    const {currentImage, imageList, currentImageCollection} = context

    return (
        <>
            <Menu />
            {imageList[currentImageCollection].length ? <CardContainer /> : <Comingsoon /> }
            {currentImage ? <ImagePortal /> : null}
        </>
    )
}

export default MobileContainer