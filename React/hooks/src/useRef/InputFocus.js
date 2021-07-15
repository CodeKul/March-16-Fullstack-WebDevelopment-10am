import React, { useRef } from 'react'

export default function InputFocus() {

    const inputRef = useRef(null)

    const handleInput = () => {
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleInput}>Focus</button>
        </div>
    )
}
