import React from 'react'
import { useAppSelector } from '../../store/hooks'
import Clock from './Clock'

const Footer = () => {
  const totalResults =  useAppSelector(state => state.totalResults)
  return (
    <div>Liczba news'ów: {totalResults}
      <Clock />
    </div>
  )
}

export default Footer