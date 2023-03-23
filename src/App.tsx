import { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import CountryList from './components/SideMenu/CountryList';
import { useAppSelector } from './store/hooks';
import { fetchNews } from './store/news-actions';
import { useAppDispatch } from './store/hooks';
import NewsList from './components/Main/NewsList';

let isInitial = true;
function App() {
  const dispatch = useAppDispatch();
  // const isList = useAppSelector(state=>state.isList);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(fetchNews('pl'));
    }
  });

  return (
    <div className="App">
      <Header />
      {/* {isList && <p>Listing or not</p>} */}
      <div className="main-view">
        <NewsList />
        <CountryList />
      </div>
    </div>
  );
}

export default App;
