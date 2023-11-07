import { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import './galery.css'
import { AppContext } from '../../pages'

import {data} from './data'

export const Galery = () => {
    const context = data

    const { imageList, currentImageCollection, dispatch } = context
    
    const scrollContainerRef = useRef(null)
    const itemRef = useRef(null)
    const [items, setItems] = useState(imageList[currentImageCollection])

    useEffect(() => {
        setItems(imageList[currentImageCollection])
    },[currentImageCollection, imageList])


    useEffect(() => {
        const current = scrollContainerRef?.current

        const handleScroll = (e) => {
            if (e.deltaY > 0) {
                setItems((prevItems) => {
                    return [
                        ...prevItems.slice(1),
                        prevItems[0]
                    ]
                });
            } else if (e.deltaY < 0) {
                setItems((prevItems) => {
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
                className={'container'}
                id="galery"
            >   
                <div className={'focus'}></div>
                {items?.map((image, index) => (
                    <div className={'item'} key={index} ref={itemRef}>
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

Galery.propType = {

}


