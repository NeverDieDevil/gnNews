import React from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import newsActions from '../../store/news-slice'

const Header = () => {
    const isList = useAppSelector(state=>state.isList);
    const dispatch = useAppDispatch();
    const viewHandler = () => {
        dispatch(newsActions.actions.toggleView())
        console.log(isList);
    }
    
  return (
    <header className='header'>
        <a href='#'>gnNews</a>
        <input type="checkbox" onChange={viewHandler} />
    </header>
  )
}

export default Header