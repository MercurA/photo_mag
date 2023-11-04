import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'

import styles from './music.module.css'
import { AppContext } from '../../pages/_app'
import { ACTIONS } from '../../utils/state/reducer'

const MusicContainer = ({ dispatch }) => {
    const context = useContext(AppContext)
    const audioRef = useRef()

    const { music, isDrawerOpen, isPopupOn } = context

    useEffect(() => {
        if (music) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [music])

    const handlePlay = () => {
        dispatch({ type: ACTIONS.music })
    }

    return (
        <div className={`${styles.container} ${(isDrawerOpen || isPopupOn) && styles.hideIcon}`} onClick={handlePlay}>
            {music ?
                <Image src='/icons/music.svg' width={20} height={20} alt="play music icon" /> :
                <div className={styles.stopped}>
                    <Image src={'/icons/music-stop.svg'} width={20} height={20} alt="stop music icon" />
                </div>
            }
            <audio ref={audioRef} autoPlay loop src='/media/trance1.flac' id='audio'></audio>
        </div>
    )
}

export default MusicContainer