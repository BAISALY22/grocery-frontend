import React from 'react'
import Hero from '../components/Hero.jsx'
import Category from '../components/Category.jsx'
import BestSeller from '../components/BestSeller.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import DidYouKnow from '../components/DidYouKnow.jsx'
import SmartPicks from '../components/SmartPicks.jsx'


const Home = () => {
  return (
    <div className='mt-10'>
      <Hero />
      <Category />  
      <BestSeller />
      <NewsLetter/>
      <SmartPicks/>
      <DidYouKnow />


    </div>
  )
}

export default Home
