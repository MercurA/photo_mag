import {useEffect, useState} from 'react'

import styles from './puzzle.module.css'
import { ACTIONS } from '../../utils/state/reducer'
import riddles from '../../utils/riddles'


const Puzzle = ({dispatch}) => {
    const [riddle, setRiddle] = useState([])
    const [solutionFound, setSolutionFound] = useState(false)

    useEffect(() => {
        setRiddle(riddles[Math.floor(Math.random(1, riddles.length) * riddles.length)])
    },[])

    const handleOnChange = (e) => {
        if(e.target.value === riddle.solution) {
            setTimeout(() => {
                setSolutionFound(true)
            }, 3000)
            setRiddle({
                ...riddle,
                text: [riddle.text[0],riddle.text[1], riddle.solution]
            })
            document.cookie = "{'isRiddleSolved':true}; expires=Fri 25 Dec 2024"
        } else {
            setSolutionFound(false)
        }
    }

    const handleRoute = () => {
        dispatch({
            type: ACTIONS.setPuzzleToRezolved,
            payload: true
        })
    }

    const renderQuestion = (question) => {
        return (
            <div className={styles.question}>
                <div className={styles.riddleContainer}>
                    {question.map((el, i) => (
                        <div key={i}>{el}</div>
                    ))}
                </div>
                <div className={styles.inputContainer}>
                    {!solutionFound ? 
                        <input type="text" placeholder='?' className={styles.input} onChange={handleOnChange} disabled={setSolutionFound} /> :
                        <div onClick={handleRoute}>Enter</div>
                    }
                </div>
            </div>
        )
    }

    const renderPuzzle = () => {
        switch (riddle?.type) {
            case 'question':
                return renderQuestion(riddle.text)
            default:
                return <div></div>
        } 
    }

    return (
        <div className={styles.container}>
           {renderPuzzle()}
        </div>
    )
}

export default Puzzle;