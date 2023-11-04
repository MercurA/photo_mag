import Article from '../components/article/Article';
import styles from './general_styles.module.css'

const DesktopBlogContainer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <Article />
            </div>
        </div>
    )
}

export default DesktopBlogContainer;