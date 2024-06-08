import MainElements from "../MainElements/MainElements";
import MainBook from "../MainBook/MainBook";

function MainPage({ books }) {
    return (
        <>
            <div className='main-page'>
                <div className="element">
                    <MainElements books={books} />
                </div>
                <div className="book">
                    <MainBook books={books} />
                </div>
            </div>
        </>
    );
  }
  export default MainPage