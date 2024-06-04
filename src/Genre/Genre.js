import './Genre.css'

function Genre({ books }) {
    if (!Array.isArray(books)) {
      return <div>No books available</div>;
    }
    const allGenres = books.reduce((acc, book) => {
        if (Array.isArray(book.genres)) {
          return acc.concat(book.genres);
        }
        return acc;
      }, []);
    
      
      const distinctGenres = [...new Set(allGenres)];
    
      return (
        <div className='genre-filter'>
          <h4>Genre</h4>
          <ul className='genres'>
            {distinctGenres.map((genre, index) => (
              <li key={index}>
                <span>{genre}</span>
              </li>
            ))}
          </ul>
        </div>
      );
  }

export default Genre