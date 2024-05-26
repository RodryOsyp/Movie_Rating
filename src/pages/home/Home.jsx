import React from 'react'
import Hero from '../../components/Hero/Hero'
import Trend from '../../components/Trend/Trend'
import style from './Home.module.css'
const Home = () => {
  return (
    <div className={style.home}>
        <Hero/>
        <Trend/>
    </div>
  )
}

export default Home