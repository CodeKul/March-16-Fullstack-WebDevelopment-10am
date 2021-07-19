import React, { useState } from 'react'

export default function ContextEx(props) {
    const [data, setData] = useState({
        name: ""
    })

    const handleSubmit = () => {
        setData(...data)
    }

    const handleInput = (e) => {
        setData({...data, 
        [e.target.name] : e.target.value})
    }
    return (
        <div>
            <input name="name" value={data.name} onChange={handleInput} type="text" />
            <button onClick={handleSubmit}>Submit</button>

            <h1>{props.data.name}</h1>
        </div>
    )
}
