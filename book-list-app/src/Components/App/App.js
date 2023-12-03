import React from "react";
import BookList from "../BookList/BookList";

export default function App() {

    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'The Fault in Our Stars', author: 'John Green' },
        { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
    ]

    return (
        <BookList books={books}></BookList>
    )
}