import './SelectedBook.css'
import Suggested from '../Suggested/Suggested'
function SelectedBook ({books}) {
    return(
        <>
            <div className='selected book'>
            
            </div>
            <Suggested suggested={{ books, filterType, filterValue }}/>
        </>
    )
}
export default SelectedBook