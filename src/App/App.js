import React, { useEffect, useState } from 'react';
import './App.css';
import MainElements from '../MainElements/MainElements';
import getBooks from '../API/API';
import MainBook from '../MainBook/MainBook';
import Header from '../Header/Header';
import { Router,Routes, Link } from 'react-router-dom';


function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true);
  const [tbr, setTbr] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await getBooks();
        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return(

    <>
      <Header/>
      <div className='main-page'>
        <MainElements books={books} />
        <MainBook books={books} />
      </div>
        <div className='button-container'>
              <Link to= '/all-books'>
              <button>Show All Books</button>
              </Link>
        </div>
    </>
  )
}

export default App;
