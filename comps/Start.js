// import Link from 'next/link';
import { useDispatch} from 'react-redux';
import { QUIZSTATUS,quizStatus} from '../store/timer'
import Router from 'next/router'
const Start = () => {
  const dispatch = useDispatch();
  const handleRedirect=()=>{
    dispatch(quizStatus(QUIZSTATUS.STARTED)) 
    Router.push('/play/quizes')
  }
    return ( 
        <div>
        <div className="container" >
    <div className="start-quiz-container">
      <h3>Coding Quiz Challenge</h3>
      <p>
        Try to answer to following code-related questions within the time
        limit
      </p>
      <p>
        Keep in mind that incorrect answers will penalize your score/time by
        ten seconds!
      </p>
      {/* <Link href=> */}
          <button id="start-quiz-btn" onClick={()=>handleRedirect()}>
          Start Quiz
          </button>
       
      {/* </Link> */}
    </div>
  </div>
  </div>
     );
}
 
export default Start;