import {API_KEY} from '../data'
import { newsActions } from './news-slice';


import { AnyAction } from 'redux'
import { RootState } from './index'
import { ThunkAction } from 'redux-thunk'

export const fetchNews =
  (country: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    const news = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`).then(res => res.json()).then(data => data);
    dispatch(
      newsActions.populateNews(news)
    )
  }
