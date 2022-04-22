import React, { createContext, useState } from 'react';
import { books } from './data';

const BooksContext = createContext();

const BooksProvider = ({children}) => {

    const [ bookList, setBookList] = useState(books);


    const value = {
        bookList: bookList
    }

    return (
        <BooksContext.Provider value={value}>
            {children}
        </BooksContext.Provider>
    );
}

export { BooksContext, BooksProvider };