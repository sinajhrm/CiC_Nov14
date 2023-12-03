import React, { useState } from 'react';
import './AddBookForm.css'
// import BookService from '../../Services/BookService';

export default function AddBook({ onAdd }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title && author) {
            try {
                // const newBook = await BookService.addBook({ title, author });
                onAdd({ title, author });
                setTitle('');
                setAuthor('');
            } catch (error) {
                console.error('Error adding book:', error.message);
            }
        }
    };

    return (
        <div className='add-book-container'>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};