import { useEffect, useState } from "react"

export const useScreenWidthAndHeight = () => {
    const [windowWidth, setWindowWidth] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {
        function handleResize() {
            setWindowWidth({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }


        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    },[])

    return windowWidth
}