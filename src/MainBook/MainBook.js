import Author from '../Author/Author';
import Genre from '../Genre/Genre';
import './MainBook.css'
function MainBook({books}){
    const book =books[0]
    return(
        <>
            <div className='main-book-container'>
                <div className='main-book'>   
                    <div className='bookImg'>
                        <img src={book.imgsrc}/>
                    </div>
                    <div className='author'>
                        <h4>{book.author}</h4>
                    </div>
                    <div className='rating'>
                        <h4>Rating: ⭐️ {book.average_rating}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainBook