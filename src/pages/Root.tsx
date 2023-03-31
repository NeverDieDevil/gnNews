import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CountryList from "../components/SideMenu/CountryList";
import "../styles/Root.scss";

const Root = () => {
  return (
    <div className="App">
      <CountryList />
      <div className="news-page">
        <Header />
        <div className="main-view">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
