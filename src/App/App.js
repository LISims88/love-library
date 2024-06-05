import React, { useEffect, useState } from 'react';
import './App.css';
import getBooks from '../API/API';
import Header from '../Header/Header';
import AllBooks from '../Results/AllBooks';
import { Router,Routes, Route } from 'react-router-dom';
import MainPage from '../Home/Home';

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState([])
  const [filterValue, setFilterValue] = useState([])
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
  const handleFilterChange= (type,value) => {
    setFilterType(type)
    setFilterValue(value)
  }

  return(
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage books={books}/>}/>
        <Route path="/all-books" element={<AllBooks books={books}/>}/>
      </Routes>
    </>
  );

}

export default App;
