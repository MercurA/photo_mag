import { useContext } from 'react'

import CardContainer from '../components/card_image/CardContainer'
import ImagePortal from '../components/card_image/ImagePortal'
import Menu from "../components/menu/Menu"
import { AppContext } from '../pages'

const MobileContainer = ({dispatch}) => {
    const context = useContext(AppContext)
    
    return (
        <>
            <Menu dispatch={dispatch} />
            <CardContainer dispatch={dispatch} />
            {context.currentImage ? <ImagePortal dispatch={dispatch} /> : null}
        </>
    )
}

export default MobileContainer