
import { useAppSelector } from "../../store/hooks";
import Clock from "./Clock";
import "../../styles/Footer.scss";

const Footer = () => {
  const totalResults = useAppSelector((state) => state.news.length);
  return (
    <footer className="gnnews-footer">
      Liczba news'ów: {totalResults}
      <Clock />
    </footer>
  );
};

export default Footer;
