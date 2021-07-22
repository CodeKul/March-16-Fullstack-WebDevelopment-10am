import React, { createContext, useState } from 'react'


export const MyContactContext = createContext();

console.log(MyContactContext)


export default function ContactContext(props) {

    const [contacts, updatedContacts] = useState(
       [
           {
               name: "sayali",
               number: 123456789
           }, 

           {
               name: "rohini",
               number: 789456321
           }
       ]
    )


    console.log(MyContactContext)
    
    return (

      
        <div>
            <MyContactContext.Provider value={[contacts, updatedContacts]}>
                {props.children}
            </MyContactContext.Provider>
        </div>
    )
}
