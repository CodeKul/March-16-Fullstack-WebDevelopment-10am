import React from 'react'

export default function Message({on}) {
    return (
        <div>
            <div>The button is {on ? "on": "false"}</div>
        </div>
    )
}
