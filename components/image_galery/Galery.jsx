import { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import styles from './galery.module.css'
import { AppContext } from '../../pages/_app'
import { ACTIONS } from '../../utils/state/reducer'

const Galery = () => {
    const context = useContext(AppContext)
    const { imageList, currentImageCollection, dispatch } = context
    const [ focusedImage, setFocusedImage ] = useState(null)
    const scrollContainerRef = useRef(null)
    const itemRef = useRef(null)
    const [items, setItems] = useState(imageList[currentImageCollection])

    useEffect(() => {
        setItems(imageList[currentImageCollection])
    }, [currentImageCollection, imageList])


    useEffect(() => {
        const current = scrollContainerRef?.current

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setItems((prevItems) => {
                    dispatch({
                        type: ACTIONS.setCurrentImageToDisplay,
                        payload: prevItems[Math.floor(prevItems.length / 2) + 1]
                    })
                    setFocusedImage(Math.floor(prevItems.length / 2) )
                    return [
                        ...prevItems.slice(1),
                        prevItems[0]
                    ]
                });
            } else if (e.deltaY < 0) {
                setItems((prevItems) => {
                    dispatch({
                        type: ACTIONS.setCurrentImageToDisplay,
                        payload: prevItems[Math.floor(prevItems.length / 2) - 1]
                    })
                    setFocusedImage(Math.floor(prevItems.length / 2))
                    return [
                        prevItems[prevItems.length - 1],
                        ...prevItems.slice(0, -1),
                    ]
                });
            }
        }
        current.addEventListener('touchstart', handleScroll)
        current.addEventListener('wheel', handleScroll)

        return () => {
            current.removeEventListener('touchstart', handleScroll)
            current.removeEventListener('wheel', handleScroll)
        }
    }, [items, dispatch, scrollContainerRef])



    return (
        <>
            <div
                ref={scrollContainerRef}
                className={styles.container}
                id="galery"
            >
                {items?.map((image, index) => (
                    <div className={styles.item} key={index} ref={itemRef} >
                        {index === focusedImage && <div className={styles.focus}></div>}
                        <Image
                            src={image.path}
                            alt={''}
                            fill={true}
                            className='image'
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Galery