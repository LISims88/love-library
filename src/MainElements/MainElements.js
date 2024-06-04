import Author from "../Author/Author";
import Genre from "../Genre/Genre";
import Header from "../Header/Header";
//import TBR from "../TBR/TBR";

function MainElements({books}){
    return(
        <>
            <Header/>
            <Genre books={books}/>
            <Author books={books}/>
            {/* <TBR/> */}
        </>
    )
}
export default MainElements