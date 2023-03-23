import React from 'react'
import '../../styles/NewsItem.scss'

const NewsItem: React.FC<{title: string, source: string, date: Date}>= (props) => {
  const {title, source, date} = props
  const data = new Date(date)
  return (
    <div className="news-item">
      <span className="news-item_title">{title}</span>
      <span className="news-item_source">{source}</span>
      <span className="news-item_date">{data.toLocaleDateString()}</span>
    </div>
  )
}

export default NewsItem