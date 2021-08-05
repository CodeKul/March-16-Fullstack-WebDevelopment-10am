import React, { useReducer, useState } from 'react'

export default function authReducer() {

    const  [auth, dispatch] = useReducer(reducer, auth);

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const reducer =() => {
        if(auth) {

            {isLoggedIn}

        } else {
            {!isLoggedIn}
        }
    }

    return (
        <div>
            
        </div>
    )
}


