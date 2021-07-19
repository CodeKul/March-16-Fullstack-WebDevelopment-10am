import React from 'react'
import Button from './Button'
import Message from './Message'

//https://kentcdodds.com/blog/application-state-management-with-react
// https://www.loginradius.com/blog/async/react-context-api/
// https://www.telerik.com/blogs/understand-react-context-api

export default function Switch({on, onToggle}) {
    return (
        <div>
            {/* <div>The button is {on ? "on": "off"}</div>
            <button onClick={onToggle}>Toggle</button> */}

            <Message on={on}/>
            <Button onToggle2={onToggle}/>
        </div>
    )
}
