import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResults:null,
        movieName:null,
    },
    reducers:{
        toogleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptmoviesResult:(state,action)=>{
            const {movieName,movieResults}=action.payload;
            state.movieName=movieName;
            state.movieResults=movieResults;
        },
    }
});
export const {toogleGptSearchView,addGptmoviesResult}=gptSlice.actions;

export default gptSlice.reducer;