import React, { useEffect, useState } from 'react';
import './App.css';
import MainElements from '../MainElements/MainElements';
import getBooks from '../API/API';



function App() {
  const [books, setBooks] = useState([])
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

  return(
    <>
      <MainElements books={books} />
    </>
  )
}

export default App;
