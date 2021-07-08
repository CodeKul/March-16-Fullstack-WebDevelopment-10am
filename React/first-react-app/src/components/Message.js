import React from 'react'

export default function Message(props) {

    if(props.isLoggedIn) {
        return <h1>Welcome</h1>
    } else {
        return <h1>Please Login</h1>
    }
   
}
