import React, { useEffect, useState } from 'react';
import './App.css';
import MainElements from '../MainElements/MainElements';
import getBooks from '../API/API';



function App() {
  const [books, setBooks] = useState([])

  useEffect(() =>{
    try {
      const fetchedBooks = getBooks()
      setBooks(fetchedBooks);
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    getBooks()
  }, [])
  return(
    <>
      <MainElements />
    </>
  )
}

export default App;
