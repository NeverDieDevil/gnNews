import React from 'react'
import { countries } from '../../countries'
import Country from './Country'
import '../../styles/CountryList.scss'

const CountryList = () => {
  return (
    <aside className="countries">
      <ul className='countries__countries-list'>
      {countries.map(country => <Country country={country}/>)}
      </ul>
    </aside>
  )
}

export default CountryList