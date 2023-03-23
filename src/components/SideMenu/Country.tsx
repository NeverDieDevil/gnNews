import '../../styles/Country.scss'

// const images = require.context("../../images/flags", true)

interface CountryInterface {
  countryName: string,
  abbv: string,
}

const Country: React.FC<{country: CountryInterface}> = (props) => {

  const {country} = props;
  const {countryName, abbv} = country;

  // const flagImagePath = images("./" + abbv + ".svg");
  // const flagImagePath= `../../images/flags/${abbv}.svg`
  // console.log(flagImagePath);

  return (
    <li className='country'>
      <img src={`./images/flags/${abbv}.svg`}  alt="" className="flag" />
      <span className="country-name">{countryName}</span>
    </li>
  )
}

export default Country