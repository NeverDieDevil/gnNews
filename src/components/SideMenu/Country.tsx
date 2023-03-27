import "../../styles/Country.scss";
import { fetchNews } from "../../store/news-actions";
import { useAppDispatch } from "../../store/hooks";
import { newsActions } from "../../store/news-slice";
import { NavLink, useLocation } from "react-router-dom";

// const images = require.context("../../images/flags", true)

interface CountryInterface {
  countryName: string;
  abbv: string;
}

const Country: React.FC<{
  country: CountryInterface;
  fetchData: (country: string) => void;
}> = (props) => {
  const { country, fetchData } = props;
  const { countryName, abbv } = country;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "country active" : "country")}
      to={"/country/" + abbv}
    >
      <li onClick={(e) => fetchData(abbv)}>
        <img src={`../images/flags/${abbv}.svg`} alt="" className="flag" />
        <span className="country-name">{countryName}</span>
      </li>
    </NavLink>
  );
};

export default Country;
