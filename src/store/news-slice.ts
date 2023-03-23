import {createSlice} from '@reduxjs/toolkit'
import { RootState } from './index'

type newsSliceState = {isList: boolean , selectedCountry: string, news: []}

const newsInitialState: newsSliceState ={isList: true, selectedCountry: 'pl', news: []}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers:{
        toggleView(state){
            state.isList = !state.isList;
        },
        populateNews(state,action){
            state.selectedCountry = action.payload;
            state.news = action.payload.articles;
            console.log(state.news)
        }
    }
})

export const newsActions = newsSlice.actions;

export const isList =(state: RootState) => state.isList

export default newsSlice;
