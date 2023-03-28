import "../../styles/Country.scss";

import { NavLink } from "react-router-dom";
import ListItem from "@mui/material/ListItem";

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
      <ListItem onClick={(e) => fetchData(abbv)}>
        <img src={`../images/flags/${abbv}.svg`} alt="" className="flag" />
        <span className="country-name">{countryName}</span>
      </ListItem>
    </NavLink>
  );
};

export default Country;
