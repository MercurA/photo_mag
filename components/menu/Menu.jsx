import { useState } from 'react'
import styles from './menu.module.css'
import Drawer from './Drawer'

const Menu = () => {
    const [isDrawerOpen, setDrawerState] = useState(false)

    const handleDrawer = () => {
        setDrawerState(!isDrawerOpen)
    }

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menuWrapper} onClick={handleDrawer}>
                <div className={styles.slideMenuBtn}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.brandTitle}>
                    <strong>Photo</strong> Magazine
                </div>
            </div>
            {/* Drawer */}
            <Drawer isOpen={isDrawerOpen} handleDrawer={handleDrawer}/>
        </div>
    )
}

export default Menu