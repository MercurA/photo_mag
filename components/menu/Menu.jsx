import { useContext, useState } from 'react'

import styles from './menu.module.css'
import { AppContext } from '../../pages'
import MusicContainer from '../music/MusicContainer'
import { strings } from '../../utils/constants'
import { ACTIONS } from '../../utils/state/reducer'

const Menu = ({ dispatch }) => {
    const context = useContext(AppContext)
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleMenuSelection = (e) => {
        dispatch({
            type: ACTIONS.setImageCollection,
            payload: e.target.dataset.id
        })
        setOpen(false)
    }

    return (
        <>
            <div className={styles.menuContainer} onClick={handleOpen}>
                <div className={styles.menuWrapper} >
                    <div className={styles.brandTitle}>
                        <strong>{"Horea's"}</strong> Photography
                    </div>
                    {/* <MusicContainer dispatch={dispatch} /> */}
                </div>
            </div>
            <div className={`${styles.menuDrawerText} ${styles.menuDrawerClosed} ${open && styles.menuDrawerOpen}`}>
                {strings.selections.map((el, i) => (
                    <div key={i} data-id={el.id} onClick={handleMenuSelection}>{el.name}</div>
                ))}
            </div>
        </>
    )
}

export default Menu