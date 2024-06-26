import React from 'react';
import { useParams } from 'react-router-dom';
import './SelectedBook.css';
import Suggested from '../Suggested/Suggested';
import MainElements from '../MainElements/MainElements';

function SelectedBook({ books,onAddToTBR ,filterBooks}) {
    const { id } = useParams();
    const bookId = Number(id);
  
    // const [tbr, setTBR] = useState(() => {
    //     return localStorage.getItem('tbr') || '[]';
    // });

    const bookSelected = books.find(book => book.id === bookId);


    if (!bookSelected) {
        return <div>Book not found</div>;
    }

    // const handleAddToTBR = () => {
    //     const tbrList = JSON.parse(tbr);
    //     const updatedTBR = [...tbrList, bookSelected];
    //     setTBR(JSON.stringify(updatedTBR));
    //     localStorage.setItem('tbr', JSON.stringify(updatedTBR));
    // };
    const suggestedBooks = filterBooks(books, bookSelected.genres[0]);

    return (
        <>
            <div className='container'>
                <MainElements books={books} />
                <div className='main-page selected-book-container'>
                    <div>
                        <img src={bookSelected.imgsrc} alt={bookSelected.title} />
                        <h3> Title: {bookSelected.title}</h3>
                        <h3>Rating: ⭐️ {bookSelected.average_rating}</h3>
                    </div>
                    <div className='summary'>
                        <p>{bookSelected.summary}</p>
                        <button onClick={() => onAddToTBR(bookSelected)}>Add to TBR</button>
                    </div>
                </div>
                <div className='main-page suggested'>
                <Suggested filteredBooks={suggestedBooks}/>
                </div>
            </div>
        </>
    );
}

export default SelectedBook;
