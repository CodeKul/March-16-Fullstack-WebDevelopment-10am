import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function GameResult() {
    const history = useHistory();

    const handleClick = () => {
        history.goBack()
    }
    return (
        <div>
            <h1>Success</h1>

            <button onClick={handleClick}>Go Back</button>
        </div>
    )
}
