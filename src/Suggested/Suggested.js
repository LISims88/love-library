import React from 'react';
import './Suggested.css';
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Suggested ({ filteredBooks }){
  if (!filteredBooks || filteredBooks.length === 0) {
    return <div>No suggested books available.</div>;
  }
  const shuffledBooks = shuffleArray(filteredBooks);

  const booksToShow = shuffledBooks.slice(0, 6);

  return (
    <div className='container'>
      <h2 className='next'>Next Reads:</h2>
      <div className="suggested-books">
        {booksToShow.map(book => (
          <Link key={book.id} to={`/books/${book.id}`}>
            <img src={book.imgsrc} alt={book.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
