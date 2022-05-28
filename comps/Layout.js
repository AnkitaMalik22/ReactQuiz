import HighScores from "./HighScores";
 const layout=({children})=>{
    return(
        <div className="centent">
            <HighScores/>
            {children}
        </div>
    )
}
export default layout;