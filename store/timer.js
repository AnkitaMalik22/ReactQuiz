import { createSlice } from "@reduxjs/toolkit";
import questions from "../script";

// import allDone from '../pages/allDone'


export const QUIZSTATUS=Object.freeze({
    STARTED:"started",
    COMPLETED:"completed",
   
    DEFAULT:'default'
    
})
const initialState={
 
    score:0,
    time:0,
    index:0,
    user:[],
    status:QUIZSTATUS.DEFAULT
   
};
export const timerSlice=createSlice({
name:'time',
initialState,
reducers:{
    setIndex(state,action){
    
        if(state.index<questions.length-1){
        state.index+=action.payload;
      }
        
    },
   setTime(state,action){
     
           if(state.time<=50 && state.time>0){
          
                state.time-=action.payload;
                
           }
 
   
    },
    setScore(state,action){
        state.score=action.payload;
    },

    reset(state,action) {
        state.time=action.payload;
        state.index=0;
        state.score=0;
    },
    setUser(state,action){
state.user.push(action.payload)
    },
    resetUserData(state,action){
        state.user=action.payload
    },
    quizStatus(state,action)
{
    state.status=action.payload
}    
    
}
})

export const {setIndex,setTime,setScore,reset,setUser,resetUserData,quizStatus}=timerSlice.actions;
export default timerSlice.reducer;
