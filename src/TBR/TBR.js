import './TBR.css'

function TBR({ tbr, setTbr }) {
    const uniqueBooks = tbr.reduce((acc, current) => {
      const x = acc.find(item => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    const handleRemoveFromTBR = (bookId) => {
        const updatedTBR = uniqueBooks.filter(book => book.id !== bookId);
        setTbr(updatedTBR);
        localStorage.setItem('tbr', JSON.stringify(updatedTBR));
    };
    
    return (
        <div className='tbr-container'>
            <h2>To Be Read List:</h2>
            <div className='tbr'>
                {uniqueBooks.map((book) => (
                 <img
                    key={book.id}
                    src={book.imgsrc}
                    alt={book.title}
                    onClick={() => handleRemoveFromTBR(book.id)}
                    style={{ cursor: 'pointer' }} 
                 />))}
            </div>
        </div>
    );
}

export default TBR