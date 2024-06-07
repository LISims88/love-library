import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedBook.css';
import Suggested from '../Suggested/Suggested';
import MainElements from '../MainElements/MainElements';

function SelectedBook({ books }) {
    const { id } = useParams();
    const bookId = Number(id);
    
    console.log('ID from URL:', bookId);
    console.log('Books:', books);
    
  
    const [tbr, setTBR] = useState(() => {
        return localStorage.getItem('tbr') || '[]';
    });

    books.forEach(book => {
        console.log('Book ID:', book.id);
    });

    // Find the selected book based on the ID
    const selectedBook = books.find(book => book.id === bookId);

    console.log('Selected Book:', selectedBook);

    if (!selectedBook) {
        return <div>Book not found</div>;
    }


    const handleAddToTBR = () => {
        const tbrList = JSON.parse(tbr);
        const updatedTBR = [...tbrList, selectedBook];
        setTBR(JSON.stringify(updatedTBR));
        localStorage.setItem('tbr', JSON.stringify(updatedTBR));
    };

    return (
        <>
            <MainElements books={books} />
            <div className='selected-book'>
                <div>
                    <img src={selectedBook.imgsrc} alt={selectedBook.title} />
                    <h3> Title: {selectedBook.title}</h3>
                    <h3>Rating: ⭐️ {selectedBook.average_rating}</h3>
                </div>
                <div>
                    <p>{selectedBook.summary}</p>
                    <button onClick={handleAddToTBR}>Add to TBR</button>
                </div>
            </div>
            <Suggested books={books} />
        </>
    );
}

export default SelectedBook;
