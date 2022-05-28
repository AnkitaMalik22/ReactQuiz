import Link from 'next/link';
import { useSelector } from 'react-redux';
import { QUIZSTATUS ,quizStatus} from '../store/timer';

const highScores = () => {
    const {time,status}=useSelector((state)=>state.time)
// console.log(status);

    return (
        <header className='header'>
            <Link href={'/viewScore'}>
            <p style={{cursor:"pointer" ,marginBottom: "1rem"}}>
                View Highscores <i><i className="fas fa-hand-point-left fa-lg"></i></i>
            </p>
            </Link>
           
            <p>
                Time : <span> 
                    { time>10?time:`0${time}`}
                    </span>
            </p>

            {/* {timeSec<10?`0${timeSec}`:`${timeSec}` }  */}
        </header>
    );
}

export default highScores;