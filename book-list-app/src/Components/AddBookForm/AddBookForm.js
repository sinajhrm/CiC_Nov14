import React, { useState } from 'react';
import './AddBookForm.css'

export default function AddBook({ onAdd }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            onAdd({ title, author });
            setTitle('');
            setAuthor('');
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