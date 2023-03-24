import React from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {newsActions} from '../../store/news-slice'
import '../../styles/Header.scss'

const Header = () => {
    const isList = useAppSelector(state=>state.isList);
    const dispatch = useAppDispatch();
    // console.log(isList);
    // console.log(newsActions);
    const viewHandler = (event: any) => {
      // console.log(newsActions)
        dispatch(newsActions.toggleView())
        // console.log(isList);
    }
    
  return (
    <header className='header'>
        <a href='#'>gnNews</a>
        <div>
        <label htmlFor="viewSelector">Choose view</label>
        <input name="viewSelector" type="checkbox" onChange={viewHandler} />
        </div>
    </header>
  )
}

export default Header