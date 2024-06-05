import { Link } from 'react-router-dom';
import './AllBooks.css'
import MainElements from '../MainElements/MainElements';

function AllBooks({ books }) {
    const sortedBooks = books.sort((a, b) => {
      if (a.author[0] < b.author[0]) {
        return -1;
      }
      if (a.author[0] > b.author[0]) {
        return 1;
      }
      return 0;
    });
    console.log(sortedBooks);
    return (
        <div className='all-books-container'>
            <MainElements books={books}/>
            <div className='books'>
                {sortedBooks.map((book) => {
                const { id, imgsrc, title } = book;
                return (
                    <Link key={id} to={`/books/${id}`}>
                    <img src={imgsrc} alt={title} />
                    </Link>
                );
                })}
            </div>
        </div>
    );
  }
export default AllBooks