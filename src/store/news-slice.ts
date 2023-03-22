import {createSlice} from '@reduxjs/toolkit'
import { RootState } from './index'

type newsSliceState = {isList: boolean}

const newsInitialState: newsSliceState ={isList: true}

const newsSlice = createSlice({
    name: 'news',
    initialState: newsInitialState,
    reducers:{
        toggleView(state){
            state.isList = !state.isList;
        },
    }
})

// export const newsActions = newsSlice.actions;

export const isList =(state: RootState) => state.isList

export default newsSlice;
