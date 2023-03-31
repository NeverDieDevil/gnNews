import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { newsActions } from "../../store/news-slice";
import { Switch, Stack, Typography } from "@mui/material";
import "../../styles/Header.scss";
import { Link } from "react-router-dom";

export const sum = (a: number, b: number) => {
  return a + b;
};

const Header = () => {
  const isList = useAppSelector((state) => state.isList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(newsActions.setIsList(true));
    };
  }, []);

  const viewHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(newsActions.setIsList(!e.target.checked));
    console.log("firing viewHandler");
  };

  return (
    <header className="header">
      <Link to="/">
        <h1>gN</h1>
        <h1>News</h1>
      </Link>
      <div>
        {/* <span>LIST VIEW</span>
        <label className="switch" htmlFor="viewSelector">
          <input name="viewSelector" type="checkbox" checked={!isList} />
          <span className="slider round" onClick={viewHandler}></span>
        </label>
        <span>TILES VIEW</span> */}
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>List</Typography>
          <Switch
            data-testid={"toggleButton"}
            checked={!isList}
            onChange={(e) => viewHandler(e)}
          />
          <Typography>Tiles</Typography>
        </Stack>
      </div>
    </header>
  );
};

export default Header;
