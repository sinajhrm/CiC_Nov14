import React from "react";

export default function BookList() {
    return (
        <div>
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>The Great Gatsby</td>
                        <td>F. Scott Fitzgerald</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>The Fault in Our Stars</td>
                        <td>John Green</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>To Kill a Mockingbird</td>
                        <td>Harper Lee</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};