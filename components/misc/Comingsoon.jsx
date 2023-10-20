import { useContext } from "react"
import { AppContext } from "../../pages"
import { strings } from "../../utils/constants"
import styles from './misc.module.css'

const Comingsoon = () => {
    const context = useContext(AppContext)

    return (
        <div id="comingsoon" className={`${context?.isMobileDevice ? styles.commingSoonMobile : styles.commingSoonDesktop}`}>{strings.misc.commingsoon}</div>
    )
}

export default Comingsoon