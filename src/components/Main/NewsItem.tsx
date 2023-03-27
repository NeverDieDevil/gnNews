import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import "../../styles/NewsItem.scss";
import Modal from "./Modal";

const NewsItem: React.FC<{
  title: string;
  source: string;
  date: Date;
  img?: string;
  desc?: string;
  author: string;
  newsUrl: string;
}> = (props) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const isList = useAppSelector((state) => state.isList);
  const { title, source, date, img, desc, newsUrl, author } = props;
  const data = new Date(date);
  const showModalHandler = () => {
    setIsModalShown((prevState) => {
      prevState = !prevState;
      return prevState;
    });
  };
  return (
    <>
      <li
        onClick={!isList ? showModalHandler : () => {}}
        className={`news-item ${isList ? "list" : "tile"}`}
      >
        {isList ? null : <img src={img} alt="there should be photo..." />}
        <span className="news-item_title">{title}</span>
        <span className="news-item-details">
          <span className="news-item-details_source">{source}</span>
          <span className="news-item-details_date">
            {data.toLocaleDateString()}
          </span>
        </span>
      </li>
      {isModalShown && !isList ? (
        <Modal
          author={author}
          title={title}
          newsUrl={newsUrl}
          showModal={showModalHandler}
        />
      ) : null}
    </>
  );
};

export default NewsItem;
