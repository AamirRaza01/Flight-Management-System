import React from 'react'
import Footer from '../components/generals/Footer'
import FlightTable from '../components/searchResult/FlightTable'
import Header from '../components/generals/Header'


const SearchResultsPage = () => {
  return (
    <div>
        <Header/>
        <FlightTable/>
        <Footer/>
    </div>
  )
}

export default SearchResultsPage