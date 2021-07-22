import React, { useContext, useState } from 'react'
import { MyContactContext } from './ContactContext';



export default function AddContact() {

    const [contacts, updatedContacts] = useContext(MyContactContext);

    const [name, setName] = useState(contacts.name)

    const [number, setNumber] = useState(contacts.number)

    console.log(number)

    

    const handleSubmit = (e) => {
        updatedContacts({...contacts, [e.target.name]:e.target.value })

    }
    return (
        <div>
            

            <input type="text"
            placeholder="Add Name"
            name="name"
            value={contacts.name}
            onChange={(e)=> {setName({name, [e.target.name]: e.target.value})}}
            />
           
            <input type="text"
            placeholder="Add Number"
            name="number"
            value={contacts.number}
            onChange={(e)=> {setNumber({number, [e.target.name]: e.target.value})}} />


            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}
