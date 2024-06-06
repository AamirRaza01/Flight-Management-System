import React from 'react'
import Header from '../components/generals/Header'
import HeroSection from '../components/generals/HeroSection'
import FlightDeals from '../components/generals/FlightsDeals'
import PlacesToStay from '../components/generals/PlacesToStay'
import Testimonial from '../components/generals/Testimonial'
import Footer from '../components/generals/Footer'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <FlightDeals/>
        <PlacesToStay/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default HomePage