import { useContext, useState } from 'react';
import Article from '../components/article/Article';
import styles from './general_styles.module.css'
import { AppContext } from '../pages/_app';
import Puzzle from '../components/puzzle/Puzzle';
import { useEffect } from 'react';

const DesktopBlogContainer = () => {
    const context = useContext(AppContext)
    const {dispatch} = context
    const [puzzleRezolved, setPuzzleToRezolved] = useState(false)
    useEffect(() => {
        setPuzzleToRezolved(getCookie('isRiddleSolved'))
    },[])

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

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