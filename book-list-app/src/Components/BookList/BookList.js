import React from "react";

/**
 * 
 * @param {[]} books An array of books
 * @returns 
 */
export default function BookList({ books }) {
    return (
        <div>
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr key="table-header">
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};