import styles from '../styles/Quizes.module.css'
        import { setAnswer,setStatus, STATUSES } from '../store/checkAnswer';
        import { useEffect } from 'react';
        import { useSelector ,useDispatch} from 'react-redux';
        import questions from '../script';
        import { setIndex, setScore, setTime,reset,QUIZSTATUS} from '../store/timer';
      import Router from "next/router";

const Quizes = () => {
    // const {status,time}=useSelector((state)=>state.time)

 
   


    const dispatch = useDispatch();
    const {status,time,index}=useSelector((state)=>state.time)
    const { statusAns }=useSelector((state)=>state.answer)
    // console.log(score,time,index,answers,status);
    useEffect(() => {
        if(status===QUIZSTATUS.DEFAULT && time===0){
           Router.push('/play')
        }
     
     }, [status,time])

    useEffect(() => {
        const interval=setInterval(() => {
          dispatch(setTime(1))   
           }, 1000);
return()=>{clearInterval(interval); }

 }, [])

 

    const length=questions.length;
    if(index===length-1 || time===0){
        if(time<0){
            dispatch(setScore(time))
            dispatch(reset(0))
        }
        // clearInterval(interval)
        dispatch(setScore(time))
        if (process.browser){
            Router.push('/play/quizes/allDone')
            }
       
     
        // console.log(index,'index');
    }

     const handleSetAnswer=(answer)=>{
     
        dispatch(setAnswer(answer))
        dispatch(setIndex(1))
        if(answer===questions[index].answer){
            dispatch(setStatus(STATUSES.TRUE))
            // dispatch(setAnswer(questions[0].answer))
            // dispatch(setScore(time))
        }else{
            dispatch(setStatus(STATUSES.FALSE))
            dispatch(setTime(10))
            // console.log(status);
           
        }
       
       
        }
      

    return (  


                <div className={styles.main} >
                {/* <div>HELLO WORLD</div> */}
               <div className={styles.quizContainer} >
               
                <h1 className={styles.questionText}>{questions[index].questionText}</h1>

                <div className={styles.answerContainer}>
                    <div className={styles.answerText}>
                        
                        <span className={styles.span}  onClick={() => {handleSetAnswer(questions[index].options[0])}}>{questions[index].options[0]}</span>
                        <span className={styles.span}  onClick={() => {handleSetAnswer(questions[index].options[1])}}>{questions[index].options[1]}</span>
                        <span  className={styles.span} onClick={() => {handleSetAnswer(questions[index].options[2])}}>{questions[index].options[2]}</span>
                       {/* <Link href="/allDone"> */}
                            <span className={styles.span} onClick={() => {handleSetAnswer(questions[index].options[3])}}>{questions[index].options[3]}</span>
                            {/* </Link> */}
                        
                    </div>
                </div>
                
               
                    <span className={styles.answer}>
                        {
                    statusAns===true ? "correct" :"incorrect"       
                  }
                  </span>
              
                
               
                </div>
            </div>
        
        
        
        
               );
        
        
        }

export default Quizes;