import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import getBooks from '../API/API';
import Header from '../Header/Header';
import AllBooks from '../AllBooks/AllBooks';
import MainPage from '../Home/Home';
import About from '../About/About';
import TBR from '../TBR/TBR';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage books={books} />} />
        <Route path="/all-books" element={<AllBooks books={books} />} />
        <Route path="/about-contact" element={<About />} />
        <Route path="/tbr" element={<TBR />} />
        <Route path="/filter-results/genre/:genre" element={<AllBooks books={books} />} />
        <Route path="/filter-results/author/:author" element={<AllBooks books={books} />} />
      </Routes>
    </>
  );
}

export default App;
