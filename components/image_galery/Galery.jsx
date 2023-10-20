import { useContext, useEffect, useRef, useState } from 'react'
import styles from './galery.module.css'
import { AppContext } from '../../pages'
import Image from 'next/image'
import { ACTIONS } from '../../utils/state/reducer'

const Galery = () => {
    const context = useContext(AppContext)
    const { imageList, currentImageCollection, dispatch } = context
    
    const scrollContainerRef = useRef(null)
    const itemRef = useRef(null)
    const [items, setItems] = useState(imageList[currentImageCollection])

    useEffect(() => {
        setItems(imageList[currentImageCollection])
    },[currentImageCollection])


    useEffect(() => {
        const current = scrollContainerRef.current

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setItems((prevItems) => {
                    dispatch({
                        type: ACTIONS.setCurrentImageToDisplay,
                        payload: prevItems[3]
                    })
                    return [
                        ...prevItems.slice(1),
                        prevItems[0]
                    ]
                });
            } else if (e.deltaY < 0) {
                setItems((prevItems) => {
                    dispatch({
                        type: ACTIONS.setCurrentImageToDisplay,
                        payload: prevItems[prevItems.length - 4]
                    })
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
    }, [items, dispatch])



    return (
        <>  
            <div
                ref={scrollContainerRef}
                className={styles.container}
                id="galery"
            >   
                <div className={styles.focus}></div>
                {items?.map((image, index) => (
                    <div className={styles.item} key={index} ref={itemRef}>
                        <Image
                            src={image.path}
                            alt={''}
                            fill={true}
                            className='image'
                        />
                    </div>
                ))}
            </div>
            <div></div>
        </>
    )
}

export default Galery