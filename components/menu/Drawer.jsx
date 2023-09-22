import Image from 'next/image'
import styles from './menu.module.css'

const LIST = ['Photos', 'Shop']

const Drawer = ({ isOpen, handleDrawer }) => {
    return (
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : styles.drawerClosed}`}>
            <div className={styles.drawerHeader}>
                <button className={styles.drawerCloseBtn} onClick={handleDrawer}>
                    <Image src={'/icons/close.svg'} width={15} height={15} alt="close icon"/>
                </button>
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