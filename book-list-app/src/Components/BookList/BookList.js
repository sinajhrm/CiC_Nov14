import BookListItem from "../BookListItem/BookListItem";
import './BookList.css'

export default function BookList({ books, onEdit, onDelete }) {
    return (
        <div className="book-list-container">
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <BookListItem
                            key={book.id}
                            book={book}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};