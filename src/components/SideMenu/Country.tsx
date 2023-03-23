import React from 'react'
import '../../styles/Country.scss'

interface CountryInterface {
  countryName: string,
  abbv: string,
}


const Country: React.FC<{country: CountryInterface}> = (props) => {
  const {country} = props;
  const {countryName, abbv} = country;
  const imagePath = `../../images/flags/${abbv}.svg`
  return (
    <li className='country'>
      {/* <img src={require(imagePath)} alt="" className="flag" /> */}
      <span className="country-name">{countryName}</span>
    </li>
  )
}

export default Country