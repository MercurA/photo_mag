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

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
        if (scrollTop + clientHeight === scrollHeight) {

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
            scrollContainerRef.current.scrollTop = 0;
        }
    }

    return (
        <div
            ref={scrollContainerRef}
            className={styles.container}
            onScroll={handleScroll}
        >
            {items.map((image, index) => (
                <div className={styles.item} key={index} ref={itemRef}>
                    <Image
                        src={image}
                        alt={''}
                        fill={true}
                        className='image'
                    />
                </div>
            ))}
        </div>
    )
}

export default Galery