import { useContext, useState } from 'react';
import Article from '../components/article/Article';
import styles from './general_styles.module.css'
import { AppContext } from '../pages/_app';
import Puzzle from '../components/puzzle/Puzzle';
import { useEffect } from 'react';
import { getCookie } from '../utils/cookieMisc';

const DesktopBlogContainer = () => {
    const context = useContext(AppContext)
    const {dispatch, routed} = context
    const [solved, setSolved] = useState(false)

    useEffect(() => {
      setSolved(getCookie('isRiddleSolved'))
    },[])

    return (
        <div className={styles.container}>
            {routed || solved ?
                (<div className={styles.innerContainer}>
                    <Article />
                </div>) :
                <Puzzle dispatch={dispatch} />
            }
        </div>
    )
}

export default DesktopBlogContainer;