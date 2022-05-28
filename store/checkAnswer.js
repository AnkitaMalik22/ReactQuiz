import { createSlice } from "@reduxjs/toolkit";

export const STATUSES=Object.freeze({
    TRUE:true,
    FALSE:false

})
const initialState={
    data:[],
statusAns:STATUSES.FALSE
};

export const answerSlice=createSlice({
name:'answer',
initialState,
reducers:{
    setAnswer(state,action){
state.data=action.payload
    },
    setStatus(state,action){
        state.status=action.payload;
    }
}
})

export const {setAnswer,setStatus}=answerSlice.actions;
export default answerSlice.reducer;