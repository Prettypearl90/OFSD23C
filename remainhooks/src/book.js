import React, { useState } from 'react';

const BookListExample = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', read: false },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', read: true },
    { id: 3, title: '1984', author: 'George Orwell', read: false },
  ]);

  const handleToggleRead = (id) => {
    setBooks((pBooks) =>
      pBooks.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} onToggleRead={handleToggleRead} />
        ))}
      </ul>
    </div>
  );
};

const BookItem = ({ book, onToggleRead }) => (
  <li>
    <h3>{book.title}</h3>
    <p>Author: {book.author}</p>
    <p>Status: {book.read ? 'Read' : 'Unread'}</p>
    <button onClick={() => onToggleRead(book.id)}>
      {book.read ? 'Mark as Unread' : 'Mark as Read'}
    </button>
  </li>
);

export default BookListExample;
