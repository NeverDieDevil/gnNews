import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CountryList from "../components/SideMenu/CountryList";
import "../styles/Root.scss";

const Root = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-view">
        <CountryList />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
