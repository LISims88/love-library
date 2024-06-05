import Author from "../Author/Author";
import Genre from "../Genre/Genre";
import { Link } from "react-router-dom";
import './MainElements.css'
//import TBR from "../TBR/TBR";

function MainElements({books}){
    return(
        <>
            <div>
                <Genre books={books}/>
                <Author books={books}/>
                <div className="link">
                    <Link to='/' style={{ color: '#f4ebfe', fontSize: '1.5em', fontWeight: 'bold' }} >Go Back</Link>
                </div>
            </div>
        </>
    )
}
export default MainElements