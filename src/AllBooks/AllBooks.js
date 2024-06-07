import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainElements from '../MainElements/MainElements';
import './AllBooks.css';

function AllBooks({ books }) {
  const { genre, author } = useParams();

  const filteredBooks = books.filter((book) => {
    if (genre) {
      return book.genres.includes(genre);
    }
    if (author) {
      return book.author === author;
    }
    return true;
  });

  const sortedBooks = filteredBooks.sort((a, b) => {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });

  return (
    <>
    <MainElements books={books} />
      <div className='all-books-container'>
        <div className='books'>
          {sortedBooks.map((book) => {
            const { id, imgsrc, title } = book;
            return (
              <Link key={id} to={`/books/${id}`}>
                <img src={imgsrc} alt={title} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllBooks;
