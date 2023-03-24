import React from "react";
import { useAppSelector } from "../../store/hooks";
import NewsItem from "./NewsItem";
import "../../styles/NewsList.scss";

const NewsList = () => {
  const newsList = useAppSelector((state) => state.news);
  return (
    <main className="newslist">
      <ul>
        {newsList.map((news) => {
          if (news.urlToImage && news.description) {
            return (
              <NewsItem
                title={news.title}
                source={news.source.name}
                date={news.publishedAt}
                img={news.urlToImage}
                desc={news.description}
                author={news.author}
                newsUrl={news.url}
              />
            );
          }
          return (
            <NewsItem
              title={news.title}
              source={news.source.name}
              date={news.publishedAt}
              author={news.author}
              newsUrl={news.url}
            />
          );
        })}
      </ul>
    </main>
  );
};

export default NewsList;
