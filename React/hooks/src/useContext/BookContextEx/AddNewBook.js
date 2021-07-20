import React, { useContext } from 'react'
import MyBookContext from "./BookContext"

export default function AddNewBook() {

    const [books, setBooks] = useContext(MyBookContext)


    const handleInput = (e) =>{
            setBooks({...books, [e.target.name]: e.target.value })
    }

    return (
        <div>
            

            <input 
            type="text"
            placeholder="Book Name"
            name="bookName"
            value={books.bookName}
            onChange={handleInput} />


            <input 
            type="text"
            placeholder="Book Price"
            name="price"
            value={books.price} 
            onChange={handleInput}/>

            <button>Add new book</button>
        </div>
    )
}
