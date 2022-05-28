import React from 'react'
import styles from '../styles/ViewScore.module.css'
import { useSelector,useDispatch } from 'react-redux';

import Link from 'next/link';

import {resetUserData} from '../store/timer'

function Score() {
    const dispatch = useDispatch();
    const {user}=useSelector((state)=>state.time)
  return (
    <div> <div className={styles.container}  >
    {/* style={{display:props.goBack?"none":"flex"}} */}
    <div className={styles.highScoreContainer}>
        <h3 className={styles.heading}>Highscores</h3>
        <div className={styles.scores}>
            <ol className={styles.scoreBoard} >
          
   
    {
          user.map((el,index)=>{
            return(
             <li key={index} className={styles.users}>{el.name}-{el.score}</li> 
           )
            })
         }
            </ol>
        </div>
      
         <Link href={'/play'}> 
          <button className={styles.goBack}>go back</button>  
          </Link>
         
      
        <button className={styles.clearHighScores}
        onClick={()=>{localStorage.clear();dispatch(resetUserData([]))}}>clear high scores</button></div>
  
</div>
</div>
  )
}

export default Score