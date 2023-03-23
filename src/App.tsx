import './App.css';
import Header from './components/Header/Header';
import CountryList from './components/SideMenu/CountryList';
import { useAppSelector } from './store/hooks';


function App() {
  // const isList = useAppSelector(state=>state.isList);

  return (
    <div className="App">
      <Header />
      {/* {isList && <p>Listing or not</p>} */}
      <CountryList />
    </div>
  );
}

export default App;
