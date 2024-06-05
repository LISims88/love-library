import Author from "../Author/Author";
import Genre from "../Genre/Genre";
//import TBR from "../TBR/TBR";

function MainElements({books}){
    return(
        <>
            <Genre books={books}/>
            <Author books={books}/>
            {/* <TBR/> */}
        </>
    )
}
export default MainElements