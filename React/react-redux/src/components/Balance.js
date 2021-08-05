import React from 'react'

export default function Balance() {

    const bank = useSelector(state => bank)

    return (
        <div>
            

            <h1>
                Bank Balance
            </h1>

            <h2>Bank Account Saving : {bank}</h2>

            <h2>Bank Account Credit : {}</h2>
        </div>
    )
}
