import React from "react";
import { useState } from "react";
import BookList from "../BookList/BookList";
import AddBook from "../AddBookForm/AddBookForm";
import './App.css'

export default function App() {

    const [books, setBooks] = useState([
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'The Fault in Our Stars', author: 'John Green' },
        { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
    ]);

    const handleEdit = (id, title, author) => {
        const updatedBooks = books.map((book) =>
            book.id === id ? { ...book, title, author } : book
        );
        setBooks(updatedBooks);
    };

    const handleAdd = ({ title, author }) => {
        const newBook = {
            id: books.length + 1,
            title,
            author,
        };
        setBooks([...books, newBook]);
    };

    const handleDelete = (id) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        setBooks(updatedBooks);
    };

    return (
        <div className="App">
            <h1>Book Management App</h1>
            <AddBook onAdd={handleAdd} />
            <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}