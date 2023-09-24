import { useContext } from 'react'

import styles from './menu.module.css'
import Drawer from './Drawer'
import { ACTIONS } from '../../utils/state/reducer'
import { AppContext } from '../../pages'

const Menu = ({dispatch}) => {
    const context = useContext(AppContext)

    const {isDrawerOpen, isPopupOn} = context

    const handleDrawer = () => {
        dispatch({type: ACTIONS.drawer})
    }

    return (
        <div className={`${styles.menuContainer} ${isPopupOn && styles.hideMenu}`}>
            <div className={styles.menuWrapper} onClick={handleDrawer}>
                <div className={styles.slideMenuBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.brandTitle}>
                    <strong>{"Horea's"}</strong> Photography
                </div>
            </div>
            {/* Drawer */}
            <Drawer isOpen={isDrawerOpen} handleDrawer={handleDrawer}/>
        </div>
    )
}

export default Menu