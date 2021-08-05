import React from 'react'

export default function AccountType() {

    const accountType = useSelector(state => state.state)

    return (
        <div>
            


        <h1>Account Type</h1>

        <h2>{accountType} : {}</h2>



        </div>
    )
}
