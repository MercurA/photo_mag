import { useContext } from 'react'

import styles from './menu.module.css'
import Drawer from './Drawer'
import { ACTIONS } from '../../utils/state/reducer'
import { AppContext } from '../../pages'
import MusicContainer from '../music/MusicContainer'

const Menu = ({dispatch}) => {
    const context = useContext(AppContext)

    const {isDrawerOpen, isPopupOn} = context

    const handleDrawer = () => {
        dispatch({type: ACTIONS.drawer})
    }

    return (
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
                <MusicContainer dispatch={dispatch} />
            </div>
            {/* Drawer */}
            <Drawer isOpen={isDrawerOpen} handleDrawer={handleDrawer}/>
        </div>
    )
}

export default Menu