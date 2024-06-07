import Author from "../Author/Author";
import Genre from "../Genre/Genre";
import { Link } from "react-router-dom";
import './MainElements.css'
//import TBR from "../TBR/TBR";

function MainElements({books}){
    return(
        <>
            <div className="side-elements">
                <Genre books={books}/>
                <Author books={books}/>
                <Link to='/' style={{ color: '#f4ebfe', fontSize: '1.5em', fontWeight: 'bold' }} >Go Back</Link>
            </div>
        </>
    )
}
export default MainElements