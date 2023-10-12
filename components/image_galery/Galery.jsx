import { useContext, useEffect, useRef, useState } from 'react'
import styles from './galery.module.css'
import { AppContext } from '../../pages'
import Image from 'next/image'
import { ACTIONS } from '../../utils/state/reducer'

const Galery = ({ dispatch }) => {
    const context = useContext(AppContext)
    const { imageList } = context
    const scrollContainerRef = useRef(null)
    const itemRef = useRef(null)
    const [items, setItems] = useState(imageList)

    useEffect(() => {
        const current = scrollContainerRef.current

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setItems((prevItems) => {
                    dispatch({
                        type: ACTIONS.setCurrentImageToDisplay,
                        payload: prevItems[1]
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
                        payload: prevItems[prevItems.length - 1]
                    })
                    return [
                        prevItems[prevItems.length - 1],
                        ...prevItems.slice(0, -1),
                    ]
                });
            }
        }

        current.addEventListener('wheel', handleScroll)

        return () => current.removeEventListener('wheel', handleScroll)
    }, [items, dispatch])



    return (
        <>
            <div
                ref={scrollContainerRef}
                className={styles.container}
            >
                {items.map((image, index) => (
                    <div className={styles.item} key={index} ref={itemRef}>
                        <div className={styles.rimRight}>
                            {[1, 2, 3, 4].map((el) => (<div key={el} className={styles.rimHole}></div>))}
                        </div>
                        <Image
                            src={image}
                            alt={''}
                            fill={true}
                            className='image'
                        />
                        <div className={styles.rimLeft}>
                            {[1, 2, 3, 4].map((el) => (<div key={el} className={styles.rimHole}></div>))}
                        </div>
                    </div>
                ))}
            </div>
            <div></div>
        </>
    )
}

export default Galery