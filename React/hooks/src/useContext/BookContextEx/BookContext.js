import React, { children, createContext, useState } from 'react'

export const MyBookContext = createContext()

export default function BookContext(props) {
   

    const [books, setBooks] = useState([
        {
            bookName: "book1",
            price: 299
        },

        {
            bookName: "book2",
            price: 499
        }
    ])
    return (
        <div>
            
            <MyBookContext.Provider value={[books, setBooks]}>
                {props.children}
            </MyBookContext.Provider>
        </div>
    )
}
