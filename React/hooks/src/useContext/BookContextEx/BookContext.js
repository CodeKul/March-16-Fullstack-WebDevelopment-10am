import React, { Children, createContext, useState } from 'react'

export default function BookContext() {
    const MyBookContext = createContext()

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
                {Children.props}
            </MyBookContext.Provider>
        </div>
    )
}
