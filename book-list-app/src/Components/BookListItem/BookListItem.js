import React from "react";
import { useState } from "react";
import './BookListItem.css'

export default function BookListItem({ book, onEdit, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(book.title);
    const [editedAuthor, setEditedAuthor] = useState(book.author);

    const handleSave = () => {
        onEdit(book.id, editedTitle, editedAuthor);
        setIsEditing(false);
    };

    return (
        <tr key={book.id} className="book-list-item">
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={editedAuthor}
                            onChange={(e) => setEditedAuthor(e.target.value)}
                        />
                    </td>
                    <td>
                        <button onClick={handleSave}>Save</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                        <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
                        <button onClick={() => onDelete(book.id)} className="delete-btn">Delete</button>
                    </td>
                </>
            )}
        </tr>
    );
};