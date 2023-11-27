import Image from 'next/image';
import styles from './cover.module.css'
import SideMenu from '../menu/SideMenu';
import Comingsoon from '../misc/Comingsoon';

const Cover = ({image}) => {
    return (
        <div className={styles.container}>
            <div className={styles.effect}>
                {image ? 
                    <Image 
                    src={image?.path} 
                    fill 
                    sizes="(max-width: 1024px) 70vw , 100vw" 
                    alt={''}
                    style={{
                        objectFit: 'contain',
                        padding: '40px',
                        
                    }}
                    id='cover_image'
                /> : <Comingsoon />}
            </div>
            <SideMenu/>
        </div>
    )
}

export default Cover;