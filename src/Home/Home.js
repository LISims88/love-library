import MainElements from "../MainElements/MainElements";
import MainBook from "../MainBook/MainBook";
import { Link } from "react-router-dom";

function MainPage({ books }) {
    return (
        <>
            <div className='main-page'>
                <MainElements books={books} />
                <MainBook books={books} />
            </div>
        </>
    );
  }
  export default MainPage