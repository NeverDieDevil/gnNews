import React from 'react'
import { useAppSelector } from '../../store/hooks' 
import NewsItem from './NewsItem'
import '../../styles/NewsList.scss'

const NewsList = () => {
  const newsList = useAppSelector(state=>state.news)
  return (
    <main className="newslist">
      {newsList.map(news => {
        return <NewsItem title={news.title} source={news.source.name} date={news.publishedAt} />
      })}
    </main>
  )
}

export default NewsList