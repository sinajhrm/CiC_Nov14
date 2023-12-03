import React from "react";
import { useState, useEffect } from "react";
import BookList from "../BookList/BookList";
import AddBook from "../AddBookForm/AddBookForm";
import './App.css'
import BookService from "../../Services/BookService";

export default function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchAllBooks() {
            try {
                const fetchedBooks = await BookService.getAllBooks();
                setBooks(fetchedBooks);
            }
            catch (err) {
                console.error('Error while fetching books: ', err.message);
            }
        }
        fetchAllBooks();
    }, [])

    const handleEdit = async (id, title, author) => {
        try {
            const updatedBook = { title, author };
            await BookService.updateBook(id, updatedBook);
            const updatedBooks = books.map((book) =>
                book.id === id ? { ...book, title, author } : book
            );
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book:', error.message);
        }
    };


    const handleAdd = async ({ title, author }) => {
        try {
            const newBook = await BookService.addBook({ title, author });
            setBooks([...books, newBook]);
        } catch (error) {
            console.error('Error adding book:', error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await BookService.deleteBook(id);
            const updatedBooks = books.filter((book) => book.id !== id);
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error deleting book:', error.message);
        }
    };

    return (
        <div className="App">
            <h1>Book Management App</h1>
            <AddBook onAdd={handleAdd} />
            <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}