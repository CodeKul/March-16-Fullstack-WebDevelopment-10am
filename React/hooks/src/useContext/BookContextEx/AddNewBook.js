import React, { useContext, useState } from 'react'
import {MyBookContext} from "./BookContext"


export default function AddNewBook() {

    const [books, setBooks] = useContext(MyBookContext)

    const [bookName, setBookName]= useState("")
    const [price, setPrice] = useState("")


    const addBook = () => {
        setBooks((prev) => [...prev, {bookName: bookName, price:price}])
    }



    return (
        <div>
            

           <input type="text"
           placeholder="Book Name" 
           onChange={(e) => setBookName(e.target.value)}
           name="bookName"
           value={books.bookName}
           />

           <input type="text"
           placeholder="Book Price"
           onChange={(e) => setPrice(e.target.value)}
           name="price"
           value={books.price} 
           />

            <button onClick={addBook}>Add new book</button>
        </div>
    )
}
