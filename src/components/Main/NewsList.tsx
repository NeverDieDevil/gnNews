import React from 'react'
import { useAppSelector } from '../../store/hooks' 
import NewsItem from './NewsItem'

const NewsList = () => {
  const news = useAppSelector(state=>state.news)
  console.log(news);
  return (
    <div className="newslist">
      {/* {news.map(info => <span>{info.title}</span>)} */}
    </div>
  )
}

export default NewsList