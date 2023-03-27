import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { newsActions } from "../../store/news-slice";
import "../../styles/Header.scss";

const Header = () => {
  const isList = useAppSelector((state) => state.isList);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(newsActions.toggleView());
    }
  },[])

  const viewHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(newsActions.toggleView());
  };

  return (
    <header className="header">
      <a href="#">
        <p>gN</p>
        <p>News</p>
      </a>
      <div>
        <span>LIST VIEW</span>
        <label className="switch" htmlFor="viewSelector">
          <input name="viewSelector" type="checkbox" checked={!isList} />
          <span className="slider round" onClick={viewHandler}></span>
        </label>
        <span>TILES VIEW</span>
      </div>
    </header>
  );
};

export default Header;
