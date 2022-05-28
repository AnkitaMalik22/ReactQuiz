import Start from '../../comps/Start'
import { useDispatch} from 'react-redux';
import { reset } from '../../store/timer';
import { QUIZSTATUS,quizStatus } from '../../store/timer';

export default function Home() {
  // const {status}=useSelector((state)=>state.time)
  const dispatch = useDispatch();
  dispatch(quizStatus(QUIZSTATUS.DEFAULT))
  dispatch(reset(50))
  return (
  <>
  
  <Start/>
  </>

 

  )
}
