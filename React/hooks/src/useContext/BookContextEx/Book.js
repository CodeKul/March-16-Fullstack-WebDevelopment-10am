import React, { useContext } from 'react'
import MyBookContext from "./BookContext"

// https://kentcdodds.com/blog/application-state-management-with-react
// https://www.section.io/engineering-education/dark-mode-for-react-app-using-context-api-and-hooks/
// https://blog.logrocket.com/a-deep-dive-into-react-context-api/

export default function Book({bookName, price}) {

    const [books, setBooks] = useContext(MyBookContext)

    return (
        <div>
            <li>
                {books.bookName}
                {books.price}
            </li>
        </div>
    )
}
