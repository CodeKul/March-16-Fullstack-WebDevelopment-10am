import React, { useContext, useState } from 'react'
import { MyContactContext } from './ContactContext';



export default function AddContact() {

    const [contacts, updatedContacts] = useContext(MyContactContext);

    const [name, setName] = useState(contacts.name)

    const [number, setNumber] = useState(contacts.number)

    console.log(number)

    

    const handleSubmit = (e) => {
        updatedContacts((prev) => [...prev, { name:name, number:number}])

        console.log("contact added", name, number )

        console.log([contacts])
    }
    return (
        <div>
            

            <input type="text"
            placeholder="Add Name"
            name="name"
            value={contacts.name}
            onChange={(e)=> {setName(e.target.value)}}
            />
           
            <input type="text"
            placeholder="Add Number"
            name="number"
            value={contacts.number}
            onChange={(e)=> {setNumber(e.target.value)}} />


            <button onClick={handleSubmit}>Add</button>


           
           
        </div>
    )
}
