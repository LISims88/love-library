import Author from "../Author/Author";
import Genre from "../Genre/Genre";
//import TBR from "../TBR/TBR";

function MainElements({books}){
    return(
        <>
            <div>
                <Genre books={books}/>
                <Author books={books}/>
            </div>
        </>
    )
}
export default MainElements