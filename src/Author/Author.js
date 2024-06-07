import { Link } from 'react-router-dom';
import './Author.css'

function Author({ books }) {
    if (!Array.isArray(books)) {
      return <div>No books available</div>;
    }
    const allAuthors = books.reduce((acc, book) => {
        if (Array.isArray(book.author)) {
          return acc.concat(book.author);
        }
        return acc;
      }, []);
          
      const distinctAuthors = [...new Set(allAuthors)];
    
      return (
        <div className='author-filter'>
          <h4>Author</h4>
          <ul className='author'>
            {distinctAuthors.map((author, index) => (
              <li key={index}>
                <Link to={`filter-results/author/${author}`} style={{ color: '#f4ebfe'}}>
                  <span>{author}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
  }

export default Author