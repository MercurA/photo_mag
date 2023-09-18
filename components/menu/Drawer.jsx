import styles from './menu.module.css'

const LIST = ['Photos', 'Shop']

const Drawer = ({ isOpen, handleDrawer }) => {
    return (
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : styles.drawerClosed}`}>
            <div className={styles.drawerHeader}>
                <div className={styles.drawerCloseBtn} onClick={handleDrawer}>x</div>
            </div>
            <div className={styles.drawerBody}>
                {LIST.map((el, i) => (
                    <div key={i} className={styles.drawerItem}>{el}</div>
                ))}
            </div>
        </div>
    )
}

export default Drawer