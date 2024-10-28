import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import getBooks from '../API/API';
import Header from '../Header/Header';
import AllBooks from '../AllBooks/AllBooks';
import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import TBR from '../TBR/TBR';
import SelectedBook from '../SelectedBook/SelectedBook';
import Error from '../Error/Error';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tbr, setTbr] = useState(() => {
    return JSON.parse(localStorage.getItem('tbr')) || [];
  });

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

  const handleAddToTBR = (book) => {
    const updatedTBR = [...tbr, book];
    setTbr(updatedTBR);
    localStorage.setItem('tbr', JSON.stringify(updatedTBR));
  };

  const filterBooks = (books, genre, author) => {
    return books.filter((book) => {
      if (genre && !book.genres.some(g => g.toLowerCase() === genre.toLowerCase())) {
        return false;
      }
      if (author && !book.author.some(a => a.toLowerCase() === author.toLowerCase())) {
        return false;
      }
      return true;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage books={books} />} />
        <Route path="/books" element={<AllBooks books={books} filterBooks={filterBooks} />} />
        <Route path="/books/:id" element={<SelectedBook books={books} onAddToTBR={handleAddToTBR} filterBooks={filterBooks}/>} />
        <Route path="/search-term/genres/:genre" element={<AllBooks books={books} filterBooks={filterBooks} />} />
        <Route path="/search-term/author/:author" element={<AllBooks books={books} filterBooks={filterBooks} />} />
        <Route path="/tbr" element={<TBR tbr={tbr} setTbr={setTbr} />} />
        <Route path="/about-contact" element={<About />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  );
  }
  
  export default App;
  
