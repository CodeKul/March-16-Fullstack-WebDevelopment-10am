import React, { useReducer, useState } from 'react'

export default function bankingReducer() {

    const [bank, dispatch] = useReducer(reducer, bank);

    console.log(bank)

    const reducer = () => {
        switch(action.type) {

            case "Saving" : 
            return (bank=0)

            case "Current":
                return (bank=1000)

        }
    }


    return (
        <div>
            
        </div>
    )
}
