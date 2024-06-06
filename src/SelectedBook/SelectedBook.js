import './SelectedBook.css'
import Suggested from '../Suggested/Suggested'
function SelectedBook ({books, filterType, filterValue, }) {
    return(
        <>
            <div className='selected book'>
                <div>
                    <img src={books.imgsrc} alt={books.title}/>
                    <h3> Title {books.title}</h3>
                    <h3>Rating: ⭐️ {books.average_rating} </h3>
                </div>
                <div>
                    <p>{books.summary}</p>
                    <button onClick={onAddToTBR}>Add to TBR</button>
                </div>
            </div>
            <Suggested books={books} filterType={filterType} filterValue={filterValue} />
        </>
    )
}
export default SelectedBook