import React from 'react'

export default function Login() {

    const loginstatus = useSelector((state) => state.authentication)
    return (
        <div>
            <button>
                {loginStatus.isLogged ? "Logout" : "Login"} 
            </button>
        </div>
    )
}
