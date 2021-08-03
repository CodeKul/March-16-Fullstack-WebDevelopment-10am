import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react/cjs/react.production.min'

export default function Game() {

    const history = useHistory()
    console.log(history)

    const [guess, setAnswer] = useState("");

    const [isCorrect, setCorrect] = useState(true);

    const element = <h3>Wrong Answer</h3>

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleClick = () => {
        if (guess === "React") {
            history.push("/result")
        } else {
            setCorrect(!isCorrect)
        }
    }
    return (
        <div>
            <h1>
                Guessing game
            </h1>

            <div>
                <label>
                    <b>Name a Frontend Library</b>
                </label>
            </div>

            <label htmlFor="guessLabel">Guess your Answer</label> <br/>

            <input type="text" value={guess} onChange={handleChange}/>

            <button onClick={handleClick}>Check Answer</button>

            <h3>{!isCorrect && element}</h3>
        </div>
    )
}
