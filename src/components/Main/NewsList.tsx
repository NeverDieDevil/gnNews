import React from "react";
import { useAppSelector } from "../../store/hooks";
import NewsItem from "./NewsItem";
import "../../styles/NewsList.scss";
import { Grid } from "@mui/material";

const NewsList = () => {
  const newsList = useAppSelector((state) => state.news);
  console.log(newsList);
  const isList = useAppSelector((state) => state.isList);
  return (
    <main className={`newslist `}>
      {isList ? (
        <div data-testid="news-list" className={isList ? "list" : "tiles"}>
          {newsList.map((news) => {
            return (
              <NewsItem
                title={news.title}
                source={news.source.name}
                date={news.publishedAt}
                img={
                  news.urlToImage
                    ? news.urlToImage
                    : "https://heuft.com/upload/image/400x267/no_image_placeholder.png"
                }
                desc={news.description ? news.description : "No description"}
                author={news.author}
                newsUrl={news.url}
              />
            );
          })}
        </div>
      ) : (
        <Grid rowSpacing={1} columnSpacing={{ xs: 1, md: 2, lg: 3 }} container>
          {newsList.map((news) => {
            return (
              <NewsItem
                title={news.title}
                source={news.source.name}
                date={news.publishedAt}
                img={
                  news.urlToImage
                    ? news.urlToImage
                    : "https://heuft.com/upload/image/400x267/no_image_placeholder.png"
                }
                desc={news.description ? news.description : "No description"}
                author={news.author}
                newsUrl={news.url}
              />
            );
          })}
        </Grid>
      )}
    </main>
  );
};

export default NewsList;
