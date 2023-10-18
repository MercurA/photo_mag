import Image from 'next/image'
import styles from './menu.module.css'
import { strings } from '../../utils/constants'
import Link from 'next/link'

const Drawer = ({ isOpen, handleDrawer, handleMenuSelection }) => {
   
    return (
        <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : styles.drawerClosed}`}>
            <div className={styles.drawerHeader}>
                <button className={styles.drawerCloseBtn} onClick={handleDrawer}>
                    <Image src={'/icons/close.svg'} width={15} height={15} alt="close icon"/>
                </button>
            </div>
            <div className={styles.drawerBody}>
                {strings.selections.map((el, i) => (
                    <div key={i} data-id={el.id} className={styles.drawerItem} onClick={handleMenuSelection}>{el.name}</div>
                ))}
            </div>
            <div className={styles.drawerFooter}>
            <p>constandacheh@gmail.com</p>
                <div>
                    <Link className={styles.link} href={'https://www.instagram.com/cypher_mercurius/'} target="_blank">
                        <Image src={'/icons/insta_white.svg'} alt="instagram logo" width={20} height={20} />
                    </Link>
                    <Link className={styles.link} href="https://github.com/MercurA" target="_blank">
                        <Image src={'/icons/github_white.svg'} alt="github logo" width={20} height={20} />
                    </Link>
                    <Link className={styles.link} href="https://soundcloud.com/dionis5" target="_blank">
                        <Image src={'/icons/soundcloud.jpg'} alt="github logo" width={20} height={20} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Drawer