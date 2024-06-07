import MainElements from "../MainElements/MainElements";
import MainBook from "../MainBook/MainBook";

function MainPage({ books }) {
    return (
        <>
            <div className='main-page'>
                <div>
                    <MainElements books={books} />
                </div>
                <MainBook books={books} />
            </div>
        </>
    );
  }
  export default MainPage