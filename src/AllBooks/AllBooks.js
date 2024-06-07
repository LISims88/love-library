import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MainElements from '../MainElements/MainElements';
import './AllBooks.css';

function AllBooks({ books, filterBooks }) {
  const { genre, author } = useParams();

  const filteredBooks = filterBooks(books, genre, author);

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
      <div className='side-elements'>
      </div>
        <MainElements books={books}/>
      <div className='main page all-books-container'>
        <div className='books'>
          {sortedBooks.map((book) => {
            return (
              <Link key={book.id} to={`/books/${book.id}`}>
                <img src={book.imgsrc} alt={book.title} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllBooks;
