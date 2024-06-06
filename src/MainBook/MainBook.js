import Author from '../Author/Author';
import Genre from '../Genre/Genre';
import { Link } from 'react-router-dom';
import './MainBook.css'

function MainBook({books,selectedGenre,selectedAuthor}){
    const filteredBooks = books.filter(book => {
        const genreMatch = selectedGenre ? book.genre === selectedGenre : true;
        const authorMatch = selectedAuthor ? book.author === selectedAuthor : true;
        return genreMatch && authorMatch;
    });
    const highestRatedBook = filteredBooks.reduce((highest, book) => {
        return book.average_rating > highest.average_rating ? book : highest;
    }, filteredBooks[0]);

    if (!highestRatedBook) {
        return <div>No books available</div>;
    }
    return(
        <>
            <div className='main-book-container'>
                <div className='main-book'>   
                    <div className='bookImg'>
                        <Link key={highestRatedBook.id} to={`/books/${highestRatedBook.id}`}>
                        <img src={highestRatedBook.imgsrc} alt={highestRatedBook.title}/>
                        </Link>
                    </div>
                    <div className='author'>
                        <h4>{highestRatedBook.author}</h4>
                    </div>
                    <div className='rating'>
                        <h4>Rating: ⭐️ {highestRatedBook.average_rating}</h4>
                    </div>
                </div>
                <div className='button-container'>
                    <Link to='/all-books'>
                        <button>Show All Books</button>
                    </Link>
                </div>
            </div>


        </>
    )
}
export default MainBook