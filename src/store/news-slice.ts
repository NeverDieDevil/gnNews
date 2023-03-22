import {createSlice} from '@reduxjs/toolkit'
import { RootState } from './index'

type newsSliceState = {isList: boolean , selectedCountry: string}

const newsInitialState: newsSliceState ={isList: true, selectedCountry: 'pl'}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers:{
        toggleView(state){
            state.isList = !state.isList;
        },
    }
})

export const newsActions = newsSlice.actions;

export const isList =(state: RootState) => state.isList

export default newsSlice;
