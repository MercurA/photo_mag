import { useContext } from 'react';
import Article from '../components/article/Article';
import styles from './general_styles.module.css'
import { AppContext } from '../pages/_app';
import Puzzle from '../components/puzzle/Puzzle';

const DesktopBlogContainer = () => {
    const context = useContext(AppContext)
    const {dispatch, puzzleRezolved} = context
    return (
        <div className={styles.container}>
            {puzzleRezolved ?
                (<div className={styles.innerContainer}>
                    <Article />
                </div>) :
                <Puzzle dispatch={dispatch} />
            }
        </div>
    )
}

export default DesktopBlogContainer;