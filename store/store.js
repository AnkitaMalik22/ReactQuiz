import { configureStore } from "@reduxjs/toolkit";
import  timerReducer  from "./timer";
import answerReducer  from "./checkAnswer";

const store =configureStore({
    reducer:{
        time:timerReducer,
        answer:answerReducer,
        
    }
})
export default store;