import React, { useContext } from 'react'
import { MyContactContext } from './ContactContext'

export default function ContactList() {

    const [contacts, updatedContacts] = useContext(MyContactContext)

    console.log(contacts)

    return (
        <div>

            {contacts.map((contact, id) => {

                return(
                    <div>
                    {contact.name}
                    {contact.number}
                    </div>

                )

               
               

            })
            }
            
        </div>
    )
}
