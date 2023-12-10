import styles from './controllers.module.css'
import Image from 'next/image';

const Controllers = ({handleDirection}) => {
    return (
        <div className={styles.container}>
            <div className={styles.arrowLeft} id={'left'} onClick={handleDirection}>
                <Image src={'./icons/arrow_back.svg'} width={20} height={20} alt={'arrow'} />
            </div>
            <div className={styles.arrowUp} id='up' onClick={handleDirection}>
                <Image src={'./icons/arrow_forward.svg'} width={20} height={20} alt={'arrow'} />
            </div>
            <div className={styles.arrowDown} id='down' onClick={handleDirection}>
                <Image src={'./icons/arrow_forward.svg'} width={20} height={20} alt={'arrow'} />
            </div>
            <div className={styles.arrowRight} id='right' onClick={handleDirection}>
                <Image src={'./icons/arrow_forward.svg'} width={20} height={20} alt={'arrow'} />
            </div>
            
            
        </div>
    )
}

export default Controllers