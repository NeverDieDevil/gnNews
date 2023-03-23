import '../../styles/Country.scss'
import { fetchNews } from '../../store/news-actions'
import { useAppDispatch } from '../../store/hooks';

// const images = require.context("../../images/flags", true)

interface CountryInterface {
  countryName: string,
  abbv: string,
}

const Country: React.FC<{country: CountryInterface}> = (props) => {
  const dispatch = useAppDispatch();

  const {country} = props;
  const {countryName, abbv} = country;

  // const flagImagePath = images("./" + abbv + ".svg");
  // const flagImagePath= `../../images/flags/${abbv}.svg`
  // console.log(flagImagePath);
  const fetchData = (e: React.MouseEvent, country:string) => {
    dispatch(fetchNews(country))
  }

  return (
    <li onClick={e => fetchData(e,abbv)} className='country'>
      <img src={`./images/flags/${abbv}.svg`}  alt="" className="flag" />
      <span className="country-name">{countryName}</span>
    </li>
  )
}

export default Country