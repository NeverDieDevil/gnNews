import React, { useEffect } from "react";
import { countries } from "../../countries";
import Country from "./Country";
import "../../styles/CountryList.scss";
import { useAppDispatch } from "../../store";
import { fetchNews } from "../../store/news-actions";
import { newsActions } from "../../store/news-slice";
import { useLocation } from "react-router-dom";
import { List } from "@mui/material";

const CountryList = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const initNews = location.pathname.split("/country/").pop();

  const fetchDataHandler = (country: string) => {
    dispatch(fetchNews(country));
    dispatch(newsActions.setSelectedCountry(country));
  };

  useEffect(() => {
    if (initNews) {
      fetchDataHandler(initNews);
    }
  }, [initNews]);

  return (
    <aside className="countries">
      <List className="countries__countries-list">
        {countries.map((country) => (
          <Country country={country} fetchData={fetchDataHandler} />
        ))}
      </List>
    </aside>
  );
};

export default CountryList;
