import Image from 'next/image'
import styles from './music.module.css'
import { useContext, useState } from 'react'
import { AppContext } from '../../pages'
import { ACTIONS } from '../../utils/state/reducer'

const MusicContainer = ({state, dispatch}) => {
    const context = useContext(AppContext)

    const {music, isDrawerOpen} = context

    const handlePlay = () => {
        dispatch({type: ACTIONS.music})
    }

    return (
        <div className={`${styles.container} ${isDrawerOpen && styles.hideIcon}`} onClick={handlePlay}>
            {music ?
                <Image src='/icons/music.svg' width={20} height={20} alt="play music icon"/> :
                <div className={styles.stopped}>
                    <Image src={'/icons/music-stop.svg'} width={20} height={20} alt="stop music icon"/>
                </div>
            }
        </div>
    )
}

export default MusicContainer