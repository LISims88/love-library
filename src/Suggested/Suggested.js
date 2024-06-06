import React, { useState, useEffect } from 'react';
import './Suggested.css';

const Suggested = ({ books, filterType, filterValue }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {

    if (filterType && filterValue && books.length > 0) {
      const filtered = books.filter(book => book[filterType] === filterValue);
      setFilteredBooks(filtered.slice(0, 6));
    }
  }, [filterType, filterValue, books]);

  return (
    <div className="suggested-books">
      {filteredBooks.map(book => (
        <a href={book.link} key={book.id} target="_blank" rel="noopener noreferrer">
          <img src={book.coverImage} alt={book.title} />
        </a>
      ))}
    </div>
  );
};

export default Suggested;
