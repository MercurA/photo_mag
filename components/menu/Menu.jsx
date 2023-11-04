import { useContext, useState } from 'react'

import styles from './menu.module.css'
import { AppContext } from '../../pages/_app'
import MusicContainer from '../music/MusicContainer'
import { strings } from '../../utils/constants'
import { ACTIONS } from '../../utils/state/reducer'
import Drawer from './Drawer'

const Menu = () => {
    const context = useContext(AppContext)

    const { isDrawerOpen, isPopupOn, dispatch } = context

    const handleDrawer = () => {
        dispatch({ type: ACTIONS.drawer })
    }

    
    const handleMenuSelection = (e) => {
        dispatch({
            type: ACTIONS.setImageCollection,
            payload: e.target.dataset.id
        })
        dispatch({
            type: ACTIONS.setCurrentImageToDisplay,
            payload: null
        })
        dispatch({ type: ACTIONS.drawer })
    }

    return (
        <>
            <div className={`${styles.menuContainer} ${isPopupOn && styles.hideMenu}`}>
                <div className={styles.menuWrapper} >
                    <div className={styles.slideMenuBtn} onClick={handleDrawer}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={styles.brandTitle}>
                        <strong>{"Horea's"}</strong> Photography
                    </div>
                    {/* <MusicContainer dispatch={dispatch} /> */}
                </div>
                <Drawer isOpen={isDrawerOpen} handleDrawer={handleDrawer} handleMenuSelection={handleMenuSelection}/>
            </div>
        </>
    )
}

export default Menu